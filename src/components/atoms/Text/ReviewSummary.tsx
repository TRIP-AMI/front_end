import { Dimensions, StyleSheet, Text, View } from 'react-native';
import colors from '@styles/colors';
import Spacing from '@styles/spacing';

function ReviewSummary({ name, content }: { name: string; content: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.content} numberOfLines={2} ellipsizeMode='tail'>
        <Text style={styles.name}>{name}</Text> {content}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width:
      Dimensions.get('window').width -
      Spacing.IOS392Margin * 2 -
      Dimensions.get('window').height * 0.015 * 2 - // padding
      Dimensions.get('window').width * 0.025 - // img marginRight
      Dimensions.get('window').height * 0.038, // img width
  },
  name: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Pretendard-SemiBold',
    letterSpacing: -0.42,
    lineHeight: 16,
  },
  content: {
    color: colors.reviewContent,
    fontSize: 14,
    fontFamily: 'Pretendard-Regular',
    letterSpacing: -0.42,
    lineHeight: 16,
  },
});

export default ReviewSummary;
