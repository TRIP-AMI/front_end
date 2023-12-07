import { StyleSheet, View } from 'react-native';
import TextTitle from '@components/atoms/Text/TextTitle';
import Spacing from '@styles/spacing';
import colors from '@styles/colors';

function ContentTitles({ price, option }: { price: string; option: string }) {
  return (
    <View style={{ marginHorizontal: Spacing.IOS392Margin }}>
      <TextTitle style={styles.title}>{price}</TextTitle>
      <TextTitle style={styles.subtitle}>{option}</TextTitle>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    letterSpacing: -0.36,
    marginBottom: 1,
  },
  subtitle: {
    color: colors.contentLine,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.28,
  },
});

export default ContentTitles;