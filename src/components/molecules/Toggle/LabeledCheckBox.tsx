import { Dispatch, SetStateAction } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@/components/atoms/Button/CheckBox';
import Colors from '@/styles/colors';

export default function LabeledCheckBox({
  label,
  isChecked,
  setChecked,
}: {
  label: string;
  isChecked: boolean;
  setChecked: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={styles.checkbox}>
        <CheckBox isChecked={isChecked} setChecked={setChecked} />
      </View>
      <View>
        <Text style={styles.text}>{label}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    marginTop: 10,
  },
  text: {
    color: Colors.fontGray02,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 30,
    letterSpacing: -0.28,
    paddingTop: 6,
    paddingHorizontal: 8,
  },
});
