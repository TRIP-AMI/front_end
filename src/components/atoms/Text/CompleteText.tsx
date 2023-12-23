import { StyleSheet, Text } from 'react-native';

function CompleteText({ message, color }: { message: string; color: string }) {
  const styles = StyleSheet.create({
    text: {
      color,
      fontSize: 14,
      fontFamily: 'Montserrat-SemiBold',
      letterSpacing: -0.28,
      lineHeight: 20,
    },
  });

  return <Text style={styles.text}>{message} completed</Text>;
}

export default CompleteText;
