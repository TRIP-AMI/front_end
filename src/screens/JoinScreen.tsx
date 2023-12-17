import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OutlinedButton from '@/components/atoms/Button/OutlinedButton';
import LabeledCheckBox from '@/components/molecules/Toggle/LabeledCheckBox';
import TextButton from '@/components/atoms/Button/TextButton';
import BasicButton, {
  BottomCancelButton,
} from '@/components/atoms/Button/BasicButton';
import Colors from '@/styles/colors';
import useModalHook from '@/hooks/modalHook';
import { RootStackNavigationProp } from '@/types/NavigationTypes';

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
    if (checkedIds.length === data.length) return;
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
    navigate('JoinAuth');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Please agree to the terms and conditions of the service
        </Text>
        <View style={styles.button}>
          {checkedIds.length === data.length ? (
            <OutlinedButton
              content='Full Agree'
              disabled
              onPress={onFullAgree}
              background
            />
          ) : (
            <OutlinedButton
              onPress={onFullAgree}
              content='Full Agree'
              disabled
            />
          )}
        </View>
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
      </View>
      <View style={styles.footer}>
        <View style={{ width: '50%' }}>
          <BottomCancelButton content='Cancel' onPress={onCancel} />
        </View>
        <View style={{ width: '50%' }}>
          {isRequiredAgree ? (
            <BasicButton content='Next' onPress={onNext} />
          ) : (
            <BasicButton content='Next' onPress={() => {}} disabled />
          )}
        </View>
      </View>
    </View>
  );
}

// TODO: 스타일 전체적으로 수정 필요
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
    paddingVertical: 40,
  },
  button: {
    paddingVertical: 20,
  },
  itemContainer: {
    flexDirection: 'column',
    paddingHorizontal: 20,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    lineHeight: 20,
  },
  checkbox: {
    width: '75%',
  },
  tag: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: Colors.fontGray07,
    letterSpacing: -0.28,
    textDecorationLine: 'underline',
    paddingVertical: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
});
