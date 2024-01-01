import { StyleSheet, View } from 'react-native';
import TextTitle from '@components/atoms/Text/TextTitle';
import Spacing from '@styles/spacing';
import Colors from '@styles/colors';

function ContentTitles({ price, option }: { price: string; option: string }) {
  return (
    <View
      style={{ paddingHorizontal: Spacing.IOS392Margin, paddingVertical: 20 }}
    >
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
    color: Colors.fontGray05,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.28,
  },
});

export default ContentTitles;
