import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  View,
  Button,
  ScrollView,
  SafeAreaView,
  Pressable,
  Text,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Controller, useController } from 'react-hook-form';
import { Octicons } from '@expo/vector-icons';
import Spacing from '@/styles/spacing';
import { RootStackNavigationProp } from '@/types/NavigationTypes';
import SectionDividerBar from '@/components/atoms/etc/SectionDividerBar';
import BasicInput from '@/components/atoms/Input/BasicInput';
import PressHashTag from '@/components/atoms/Tag/PressHashTag';
import ContentInputWrap from '@/components/molecules/Input/ContentInputWrap';
import Counter from '@/components/molecules/Controller/Counter';
import useUpload, { CreateContentBasicForm } from '@/hooks/uploadHook';
import BasicButton from '@/components/atoms/Button/BasicButton';
import { CategoryList } from '@/constants/category';
import SelectButton from '@/components/atoms/Button/SelectButton';

export default function UploadScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const { control, handleSubmit } = useUpload();
  const {
    field: { value: categoryValues, onChange: categoryChange },
  } = useController({ control, name: 'category' });
  const {
    field: { value: hashtagValues, onChange: hashtagChange },
  } = useController({ control, name: 'hashtagList' });

  const handleCal = () => {
    navigation.navigate('Calendar');
  };

  const onPressCategory = (id: string) => {
    // 중복확인
    if (categoryValues.includes(id)) {
      categoryChange(categoryValues.filter((categoryId) => categoryId !== id));
      return;
    }

    // 최대갯수
    if (categoryValues.length >= 3) {
      console.log('최대 3개까지만 선택 가능');
      return;
    }

    // 변환
    categoryChange([...categoryValues, id]);
  };

  const onSubmitEditingHashtag = (value: string) => {
    if (hashtagValues.includes(value)) {
      console.log('중복 되었습니다');
      return;
    }

    if (hashtagValues.length >= 3) {
      console.log('최대 3개까지만 선택 가능');
      return;
    }

    hashtagChange([...hashtagValues, value]);
  };

  const onSubmit = (data: CreateContentBasicForm) => {
    console.log('form data', data);
  };

  const deleteHashtag = (tag: string) => {
    hashtagChange(hashtagValues.filter((tagId) => tagId !== tag));
  };

  return (
    <SafeAreaView>
      <StatusBar style='auto' />

      {/* content */}
      <ScrollView style={styles.container}>
        {/* basic info */}
        <View
          style={{
            marginTop: 15,
            paddingHorizontal: Spacing.IOS392Margin,
          }}
        >
          {/* title */}
          <ContentInputWrap
            title='Title'
            content={
              <Controller
                control={control}
                name='title'
                render={({ field: { onChange, value } }) => {
                  return (
                    <BasicInput
                      value={value}
                      onChangeText={onChange}
                      placeholder='No more than 50 characters.'
                    />
                  );
                }}
              />
            }
          />

          {/* Explanation */}
          <ContentInputWrap
            title='Explanation'
            content={
              <Controller
                control={control}
                name='explanation'
                render={({ field: { onChange, value } }) => {
                  return (
                    <BasicInput
                      value={value}
                      onChangeText={onChange}
                      placeholder='No more than 500 characters.'
                      textarea
                      maxLength={500}
                    />
                  );
                }}
              />
            }
          />

          {/* Category */}
          <ContentInputWrap
            title='Category'
            subTitle='Select all relevant categories.'
            content={
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
                    active={categoryValues.includes(ctry.id)}
                    onPress={() => {
                      onPressCategory(ctry.id);
                    }}
                    style={{ marginRight: 5, marginBottom: 5 }}
                  />
                ))}
              </View>
            }
          />

          {/* Hashtag */}
          <ContentInputWrap
            title='Hashtag'
            subTitle='Enter tags associated with the program (Up to 3)'
            content={
              <View>
                <Controller
                  control={control}
                  name='hashtag'
                  render={({ field: { onChange, value } }) => {
                    return (
                      <BasicInput
                        value={value}
                        onChangeText={onChange}
                        placeholder='#tag'
                        onSubmitEditing={() => {
                          onSubmitEditingHashtag(value);
                        }}
                      />
                    );
                  }}
                />
                <View style={{ flexDirection: 'row', marginTop: 8 }}>
                  {hashtagValues.map((tag) => {
                    return (
                      <View
                        key={tag}
                        style={{ position: 'relative', marginRight: 12 }}
                      >
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
            }
          />

          {/* Meeting Point */}
          <ContentInputWrap
            title='Meeting Point'
            subTitle='EX) In front of Lotte Tower in Jamsil-dong, Songpa-gu, Seoul'
            content={<BasicInput placeholder='Please enter a location.' />}
          />

          {/* Time to meet */}
          <ContentInputWrap
            title='Time to meet'
            content={
              <View>
                <SelectButton title='hours / minutes' onPress={() => {}} />
              </View>
            }
          />

          {/* Available Dates */}
          <ContentInputWrap
            title='Available Dates'
            content={
              <View>
                <Controller
                  control={control}
                  name='availableDates'
                  render={({ field: { value } }) => {
                    return (
                      <View>
                        {value.map((date) => (
                          <Text>{date}</Text>
                        ))}
                      </View>
                    );
                  }}
                />
                <Button title='calendar go' onPress={handleCal} />
              </View>
            }
          />

          {/* Recruited Persons */}
          <ContentInputWrap
            title='Recruited Persons'
            content={<Counter min={1} max={10} />}
          />

          {/* E-mail */}
          <ContentInputWrap
            title='E-mail'
            subTitle='Please enter an email to communicate with.'
            content={<View />}
          />
        </View>

        {/* Program Course */}
        <SectionDividerBar />
        <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
          {/* temp */}
        </View>
        {/* Program Cost */}
        <SectionDividerBar />
        <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
          {/* temp */}
        </View>

        {/* submit */}
        <BasicButton content='Upload' onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 15,
    backgroundColor: '#ffffff',
  },
});
