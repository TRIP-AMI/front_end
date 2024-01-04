import { StyleSheet, Text, View } from 'react-native';
import Colors from '@styles/colors';

function WithdrawalFooter() {
  const contents = [
    ' Your personal information will be deleted immediately in an irrecoverable way.',
    ' Your personal information will be deleted, but what you wrote when you were a member posts and comments will not be deleted.',
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Guide to withdrawal</Text>
      {contents.map((content, index) => (
        <View style={styles.textContainer}>
          <Text style={styles.content}>•</Text>
          <Text key={index.toString() + content} style={styles.content}>
            {content}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    backgroundColor: Colors.lineGray05,
    paddingHorizontal: 24,
    paddingTop: 30,
    paddingBottom: 40,
  },
  textContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  title: {
    color: '#77787A',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: -0.32,
    marginBottom: 10,
  },
  content: {
    color: '#77787A',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 16,
    letterSpacing: -0.24,
  },
});

export default WithdrawalFooter;
