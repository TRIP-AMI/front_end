import { Text, StyleSheet, TextStyle } from 'react-native';
import Colors from '@/styles/colors';

export default function ReportTitleText({
  title,
  style,
}: {
  title: string;
  style?: TextStyle;
}) {
  return <Text style={[styles.title, style]}>{title}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: -0.36,
    lineHeight: 24,
    color: Colors.fontGray02,
  },
});
