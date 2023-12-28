import { Pressable, View, Text } from 'react-native';
import { Control, useController } from 'react-hook-form';
import { Octicons } from '@expo/vector-icons';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import ContentInputWrap from '@/components/molecules/Input/ContentInputWrap';
import BasicInput from '@/components/atoms/Input/BasicInput';
import PressHashTag from '@/components/atoms/Tag/PressHashTag';
import { Category, CategoryList } from '@/constants/category';
import SelectButton from '@/components/atoms/Button/SelectButton';
import {
  BottomTabParamList,
  RootStackNavigationProp,
} from '@/types/NavigationTypes';
import Counter from '@/components/molecules/Controller/Counter';
import useModalHook from '@/hooks/modalHook';
import TimePickerModal from '../../Modal/TimePickerModal';

// input =======================================================================================================================================
function Title({
  control,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}) {
  const {
    field: { value, onChange },
  } = useController({ control, name: 'title' });

  return (
    <BasicInput
      value={value}
      onChangeText={onChange}
      placeholder='No more than 50 characters.'
    />
  );
}
function Explanation({
  control,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}) {
  const {
    field: { value, onChange },
  } = useController({ control, name: 'explanation' });

  return (
    <BasicInput
      value={value}
      onChangeText={onChange}
      placeholder='No more than 500 characters.'
      textarea
      maxLength={500}
    />
  );
}
function CategoryWrap({
  control,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}) {
  const {
    field: { value, onChange },
  } = useController({ control, name: 'category' });

  const onPressCategory = (id: string) => {
    // 중복확인
    if (value.includes(id)) {
      onChange(value.filter((categoryId: Category) => categoryId !== id));
      return;
    }

    // 최대갯수
    if (value.length >= 3) {
      console.log('최대 3개까지만 선택 가능');
      return;
    }

    // 변환
    onChange([...value, id]);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '80%',
      }}
    >
      {CategoryList.map((ctry) => (
        <PressHashTag
          key={ctry.id}
          label={ctry.label}
          active={value.includes(ctry.id)}
          onPress={() => {
            onPressCategory(ctry.id);
          }}
          style={{ marginRight: 5, marginBottom: 5 }}
        />
      ))}
    </View>
  );
}
function HashtagWrap({
  control,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}) {
  const {
    field: { value: hashtag, onChange: hashtagChange },
  } = useController({ control, name: 'hashtag' });
  const {
    field: { value: hashtagValues, onChange: hashtagValuesChange },
  } = useController({ control, name: 'hashtagList' });

  const onSubmitEditingHashtag = (value: string) => {
    const trimValue = value.trim();
    if (hashtagValues.includes(trimValue)) {
      console.log('중복 되었습니다');
      return;
    }

    if (hashtagValues.length >= 3) {
      console.log('최대 3개까지만 선택 가능');
      return;
    }

    hashtagValuesChange([...hashtagValues, trimValue]);
  };

  const deleteHashtag = (tag: string) => {
    hashtagValuesChange(hashtagValues.filter((tagId: string) => tagId !== tag));
  };

  return (
    <View>
      <BasicInput
        value={hashtag}
        onChangeText={hashtagChange}
        placeholder='#tag'
        onSubmitEditing={() => {
          onSubmitEditingHashtag(hashtag);
        }}
      />
      <View style={{ flexDirection: 'row', marginTop: 8 }}>
        {hashtagValues.map((tag: string) => {
          return (
            <View key={tag} style={{ position: 'relative', marginRight: 12 }}>
              <PressHashTag label={tag} />
              <Pressable
                style={{ position: 'absolute', top: 0, right: -8 }}
                onPress={() => {
                  deleteHashtag(tag);
                }}
              >
                <Octicons
                  name='x-circle-fill'
                  size={18}
                  color='#ccc'
                  style={{ marginLeft: 20, backgroundColor: '#fff' }}
                />
              </Pressable>
            </View>
          );
        })}
      </View>
    </View>
  );
}
function MeetingPoint({
  control,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}) {
  const {
    field: { value, onChange },
  } = useController({ control, name: 'meetingPoint' });

  return (
    <BasicInput
      value={value}
      onChangeText={onChange}
      placeholder='Please enter a location.'
    />
  );
}
function TimeToMeet({
  control,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}) {
  const {
    field: { value, onChange },
  } = useController({ control, name: 'timeToMeet' });

  const { isVisible, onOpen, onClose } = useModalHook();
  const [date, setDate] = useState<Date>(new Date());

  useEffect(() => {
    const temp = dayjs(date);
    onChange({ h: temp.format('HH'), m: temp.format('mm') });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  let labelText = 'hours / minutes';

  if (value.h && value.m) {
    labelText = `${value.h} / ${value.m}`;
  }

  return (
    <View>
      <SelectButton
        title={labelText}
        onPress={() => {
          onOpen();
        }}
      />
      {/* modal */}
      <TimePickerModal
        isVisible={isVisible}
        onClose={onClose}
        date={date}
        setDate={setDate}
      />
    </View>
  );
}
function AvailableDates({
  control,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}) {
  const { params } = useRoute<RouteProp<BottomTabParamList, 'Upload'>>();
  const navigation = useNavigation<RootStackNavigationProp>();
  const {
    field: { value, onChange },
  } = useController({ control, name: 'availableDates' });

  useEffect(() => {
    if (params && params.availableDates) {
      onChange(params.availableDates);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const handleCal = () => {
    navigation.navigate('Calendar', { availableDates: value });
  };

  return (
    <View>
      <Pressable
        onPress={handleCal}
        style={{
          padding: 14,
          borderWidth: 1,
          borderColor: '#ECECEC',
          borderRadius: 5,
        }}
      >
        <Text style={{ color: '#B9B9B9' }}>Please select a date.</Text>
      </Pressable>

      <View style={{ marginTop: 8 }}>
        {value.map((date: string) => (
          <Text
            key={date}
            style={{
              fontFamily: 'Montserrat-Medium',
              fontSize: 16,
              lineHeight: 22,
            }}
          >
            {dayjs(date).format('MMMM YYYY')}
          </Text>
        ))}
      </View>
    </View>
  );
}
function RecruitedPersonsWrap({
  control,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}) {
  const {
    field: { onChange },
  } = useController({ control, name: 'recruitedPersons' });

  return (
    <View>
      <Counter min={1} max={10} onChange={onChange} />
    </View>
  );
}
function EmailWrap({
  control,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}) {
  const {
    field: { value, onChange },
  } = useController({ control, name: 'email' });

  return <BasicInput value={value} onChangeText={onChange} />;
}
// =======================================================================================================================================

export default function ProgramBasicInfoWrap({
  control,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}) {
  return (
    <View>
      {/* title */}
      <ContentInputWrap title='Title' content={<Title control={control} />} />

      {/* Explanation */}
      <ContentInputWrap
        title='Explanation'
        content={<Explanation control={control} />}
      />

      {/* Category */}
      <ContentInputWrap
        title='Category'
        subTitle='Select all relevant categories.'
        content={<CategoryWrap control={control} />}
      />

      {/* Hashtag */}
      <ContentInputWrap
        title='Hashtag'
        subTitle='Enter tags associated with the program (Up to 3)'
        content={<HashtagWrap control={control} />}
      />

      {/* Meeting Point */}
      <ContentInputWrap
        title='Meeting Point'
        subTitle='EX) In front of Lotte Tower in Jamsil-dong, Songpa-gu, Seoul'
        content={<MeetingPoint control={control} />}
      />

      {/* Time to meet */}
      <ContentInputWrap
        title='Time to meet'
        content={<TimeToMeet control={control} />}
      />

      {/* Available Dates */}
      <ContentInputWrap
        title='Available Dates'
        content={<AvailableDates control={control} />}
      />

      {/* Recruited Persons */}
      <ContentInputWrap
        title='Recruited Persons'
        content={<RecruitedPersonsWrap control={control} />}
      />

      {/* E-mail */}
      <ContentInputWrap
        title='E-mail'
        subTitle='Please enter an email to communicate with.'
        content={<EmailWrap control={control} />}
      />
    </View>
  );
}
