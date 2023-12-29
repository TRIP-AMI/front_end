import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OutlinedButton from '@/components/atoms/Button/OutlinedButton';
import LabeledCheckBox from '@/components/molecules/Toggle/LabeledCheckBox';
import TextButton from '@/components/atoms/Button/TextButton';
import Colors from '@/styles/colors';
import useModalHook from '@/hooks/modalHook';
import {
  JoinTemsScreen,
  RootStackNavigationProp,
} from '@/types/NavigationTypes';
import BottomButtons from '@/components/atoms/Button/BottomButtons';
import JoinLayout from '@/components/organisms/Layout/JoinLayout';
import JOIN_TERMS, { JoinTermsDataType } from '@/constants/joinTerms';

export default function JoinScreen() {
  const [checkedIds, setCheckedIds] = useState<number[]>([]);
  const [isRequiredAgree, setIsRequiredAgree] = useState(false);
  const { setModalName } = useModalHook();
  const { navigate } = useNavigation<RootStackNavigationProp>();
  const OPTIONAL_ID = 4;

  const onCheck = (id: number) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((checkedId) => checkedId !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  const onFullAgree = () => {
    if (checkedIds.length === JOIN_TERMS.length) {
      setCheckedIds([]);
      return;
    }
    setCheckedIds(JOIN_TERMS.map((item) => item.id));
  };

  useEffect(() => {
    const checkedRequired = JOIN_TERMS.filter(
      (item) => checkedIds.includes(item.id) && item.required,
    );
    if (
      checkedRequired.length ===
      JOIN_TERMS.filter((item) => item.required).length
    ) {
      setIsRequiredAgree(true);
    } else {
      setIsRequiredAgree(false);
    }
  }, [checkedIds]);

  const onCancel = () => {
    setModalName('JOIN_CANCEL');
  };

  const onNext = () => {
    if (!isRequiredAgree) return;
    navigate('JoinAuth', {
      mode: 'JOIN',
      optionalChecked: checkedIds.includes(OPTIONAL_ID),
    });
  };

  const onPressView = (item: JoinTermsDataType) => {
    const screen = item.title.split(' ')[0] as JoinTemsScreen;
    navigate(screen, {
      en: item.detail_en,
      ko: item.detail_ko,
    });
  };

  return (
    <>
      <JoinLayout title='Please agree to the terms and conditions of the service'>
        <OutlinedButton
          onPress={onFullAgree}
          content='Full Agree'
          customStyle={{
            borderColor:
              checkedIds.length === JOIN_TERMS.length
                ? Colors.lineGray04
                : Colors.fontGray06,
          }}
          background={checkedIds.length === JOIN_TERMS.length}
        />
        <View style={styles.itemContainer}>
          {JOIN_TERMS.map((item) => (
            <View key={item.id} style={styles.item}>
              <View style={styles.checkbox}>
                <LabeledCheckBox
                  label={item.content}
                  required={item.required ? '(Required)' : '(Optional)'}
                  textStyle={styles.itemText}
                  isChecked={checkedIds.includes(item.id)}
                  onCheck={() => onCheck(item.id)}
                />
              </View>
              <TextButton
                title='View'
                style={styles.tag}
                onPress={() => onPressView(item)}
              />
            </View>
          ))}
        </View>
      </JoinLayout>
      <BottomButtons
        onCancel={onCancel}
        onNext={onNext}
        disabled={!isRequiredAgree}
      />
    </>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',
    paddingVertical: 30,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 9,
  },
  itemText: {
    color: Colors.fontGray03,
    lineHeight: 18,
  },
  checkbox: {
    width: '75%',
  },
  tag: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: Colors.fontGray05,
    letterSpacing: -0.24,
    lineHeight: 15,
    textDecorationLine: 'underline',
    paddingVertical: 10,
  },
});
