import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OutlinedButton from '@/components/atoms/Button/OutlinedButton';
import LabeledCheckBox from '@/components/molecules/Toggle/LabeledCheckBox';
import TextButton from '@/components/atoms/Button/TextButton';
import Colors from '@/styles/colors';
import useModalHook from '@/hooks/modalHook';
import { RootStackNavigationProp } from '@/types/NavigationTypes';
import BottomButtons from '@/components/atoms/Button/BottomButtons';
import JoinLayout from '@/components/organisms/Layout/JoinLayout';

// TODO: 약관 데이터 수정
const data = [
  {
    id: 1,
    content: 'Agree to Terms and Conditions of Service (Required)',
    required: true,
  },
  {
    id: 2,
    content: `Consent to collect /\n use personal information (Required)`,
    required: true,
  },
  {
    id: 3,
    content: 'Accept receipt of marketing benefit notifications (Optional)',
    required: false,
  },
];

export default function JoinScreen() {
  const [checkedIds, setCheckedIds] = useState<number[]>([]);
  const [isRequiredAgree, setIsRequiredAgree] = useState(false);
  const { setModalName } = useModalHook();
  const { navigate } = useNavigation<RootStackNavigationProp>();

  const onCheck = (id: number) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((checkedId) => checkedId !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  const onFullAgree = () => {
    console.log('full agree');
    if (checkedIds.length === data.length) {
      setCheckedIds([]);
      return;
    }
    setCheckedIds(data.map((item) => item.id));
  };

  useEffect(() => {
    const checkedRequired = data.filter(
      (item) => checkedIds.includes(item.id) && item.required,
    );
    if (
      checkedRequired.length === data.filter((item) => item.required).length
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
      optionalChecked: checkedIds.includes(3),
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
              checkedIds.length === data.length
                ? Colors.lineGray04
                : Colors.fontGray06,
          }}
          background={checkedIds.length === data.length}
        />
        <View style={styles.itemContainer}>
          {data.map((item) => (
            <View key={item.id} style={styles.item}>
              <View style={styles.checkbox}>
                <LabeledCheckBox
                  label={item.content}
                  textStyle={styles.itemText}
                  isChecked={checkedIds.includes(item.id)}
                  onCheck={() => onCheck(item.id)}
                />
              </View>
              {/* TODO: onPressView 정의 */}
              <TextButton title='View' style={styles.tag} onPress={() => {}} />
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
