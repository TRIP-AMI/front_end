import { View, Text, StyleSheet } from 'react-native';
import CheckBox from '@/components/atoms/Button/CheckBox';
import Colors from '@/styles/colors';

export default function LabeledCheckBox({
  label,
  required,
  textStyle,
  isChecked,
  onCheck,
}: {
  label: string;
  required?: '(Required)' | '(Optional)';
  textStyle?: object;
  isChecked: boolean;
  onCheck: () => void;
}) {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={styles.checkbox}>
        <CheckBox isChecked={isChecked} onCheck={onCheck} />
      </View>
      <View>
        <Text style={[styles.text, textStyle]}>
          {label}
          {required && (
            <Text style={{ color: Colors.primary }}>{` ${required}`}</Text>
          )}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    paddingTop: 5,
  },
  text: {
    color: Colors.fontGray02,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 30,
    letterSpacing: -0.28,
    paddingTop: 5,
    paddingHorizontal: 5,
  },
});
