import { StyleSheet, Text, View } from 'react-native';
import Colors from '@styles/colors';

function ReviewText({ name, content }: { name: string; content: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        <Text style={styles.name}>{name}</Text> {content}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    width: '90%',
  },
  name: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: -0.42,
    lineHeight: 16,
  },
  content: {
    color: Colors.reviewContent,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.42,
    lineHeight: 16,
  },
});

export default ReviewText;
