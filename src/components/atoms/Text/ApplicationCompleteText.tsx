import { StyleSheet, Text } from 'react-native';

function ApplicationCompleteText() {
  return <Text style={styles.text}>Application Completed</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: '#46A6FB',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: -0.28,
  },
});

export default ApplicationCompleteText;
