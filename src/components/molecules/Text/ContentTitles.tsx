import { StyleSheet, View } from 'react-native';
import TextTitle from '@components/atoms/Text/TextTitle';
import Spacing from '@styles/spacing';
import colors from '@styles/colors';

function ContentTitles({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <View>
      <TextTitle style={styles.title}>{title}</TextTitle>
      <TextTitle style={styles.subtitle}>{subtitle}</TextTitle>
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
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    marginBottom: 10,
  },
});

export default ContentTitles;
