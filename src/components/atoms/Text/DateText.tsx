import { StyleSheet, Text } from 'react-native';
import Colors from '@styles/colors';

function DateText({ message, date }: { message: string; date: string }) {
  return (
    <Text style={styles.text}>
      {message} date {date}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.fontGray05,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.24,
    lineHeight: 18,
  },
});

export default DateText;
