import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@/components/atoms/Button/CheckBox';
import Colors from '@/styles/colors';

export default function LabeledCheckBox({
  label,
  textStyle,
  isChecked,
  onCheck,
}: {
  label: string;
  textStyle?: object;
  isChecked: boolean;
  onCheck: () => void;
}) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={styles.checkbox}>
        <CheckBox isChecked={isChecked} onCheck={onCheck} />
      </View>
      <View>
        <Text style={[styles.text, textStyle]}>{label}</Text>
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
