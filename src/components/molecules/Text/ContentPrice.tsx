import { StyleSheet, View } from 'react-native';
import TextTitle from '@components/atoms/Text/TextTitle';
import Spacing from '@styles/spacing';
import colors from '@styles/colors';

function ContentTitles({ price, option }: { price: string; option: string }) {
  return (
    <View>
      <TextTitle style={styles.title}>{price}</TextTitle>
      <TextTitle style={styles.subtitle}>{option}</TextTitle>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#000000',
    marginLeft: Spacing.IOS392Margin,
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    marginBottom: 5,
  },
  subtitle: {
    color: colors.subtitle,
    marginLeft: Spacing.IOS392Margin,
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
  },
});

export default ContentTitles;
