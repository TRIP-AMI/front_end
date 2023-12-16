import { useSetRecoilState } from 'recoil';
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import OutlinedButton from '@/components/atoms/Button/OutlinedButton';
import LabeledCheckBox from '@/components/molecules/Toggle/LabeledCheckBox';
import TextButton from '@/components/atoms/Button/TextButton';
import BasicButton, {
  BottomCancelButton,
} from '@/components/atoms/Button/BasicButton';
import Colors from '@/styles/colors';
import modalState from '@/utils/recoil/modal';

const data = [
  {
    id: 1,
    content: 'Agree to Terms and Conditions of Service (Required)',
    required: true,
    checked: false,
  },
  {
    id: 2,
    content: `Consent to collect /\n use personal information (Required)`,
    required: true,
    checked: false,
  },
  {
    id: 3,
    content: 'Accept receipt of marketing benefit notifications (Optional)',
    required: false,
    checked: false,
  },
];

export default function JoinScreen() {
  const [items, setItems] = useState(data);
  const [isFullAgree, setIsFullAgree] = useState(false);
  const [isRequiredAgree, setIsRequiredAgree] = useState(false);
  const setModal = useSetRecoilState(modalState);

  const onFullAgree = () => {
    if (isFullAgree) return;
    setIsFullAgree(true);
    setItems(
      items.map((item) => {
        return {
          ...item,
          checked: true,
        };
      }),
    );
  };

  useEffect(() => {
    if (items.every((item) => item.checked)) {
      setIsFullAgree(true);
      setIsRequiredAgree(true);
    } else if (
      items.filter((item) => item.required).every((item) => item.checked)
    ) {
      setIsRequiredAgree(true);
    } else {
      setIsFullAgree(false);
      setIsRequiredAgree(false);
    }
  }, [items]);

  const onCancel = () => {
    setModal({
      modalName: 'JOIN_CANCEL',
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Please agree to the terms and conditions of the service
        </Text>
        <View style={styles.button}>
          {isFullAgree ? (
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
          {items.map((item) => (
            <View key={item.id} style={styles.item}>
              <View style={styles.checkbox}>
                <LabeledCheckBox
                  label={item.content}
                  textStyle={styles.itemText}
                  isChecked={item.checked}
                  setChecked={() => {
                    // eslint-disable-next-line no-param-reassign
                    item.checked = !item.checked;
                    setItems([...items]);
                  }}
                />
              </View>
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
            <BasicButton content='Next' onPress={() => {}} />
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
