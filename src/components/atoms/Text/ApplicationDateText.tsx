import { StyleSheet, Text } from 'react-native';
import Colors from '@styles/colors';

function ApplicationDateText({ date }: { date: string }) {
  return <Text style={styles.text}>Application date {date}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: Colors.fontGray05,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.24,
  },
});

export default ApplicationDateText;
