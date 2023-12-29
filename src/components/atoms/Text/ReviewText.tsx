import { Dimensions, StyleSheet, Text, View } from 'react-native';
import Colors from '@styles/colors';
import Spacing from '@styles/spacing';

function ReviewText({ name, content }: { name: string; content: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>
        <Text style={styles.name}>{name}</Text> {content}
      </Text>
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width:
      screenWidth -
      Spacing.IOS392Margin * 2 -
      screenHeight * 0.015 * 2 - // padding
      screenWidth * 0.025 - // img marginRight
      screenHeight * 0.038, // img width
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
