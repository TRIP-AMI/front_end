import TextTitle from '@components/atoms/Text/TextTitle';
import { StyleSheet } from 'react-native';
import Spacing from '@styles/spacing';
import ContentLocation from '@components/atoms/Text/ContentLocation';
import colors from '@styles/colors';

function ContentProgram() {
  return (
    <>
      <TextTitle style={styles.title}>Program</TextTitle>
      <ContentLocation style={styles.location} location='Jongno, Seoul' />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    letterSpacing: -0.36,
    marginLeft: Spacing.IOS392Margin,
    marginBottom: 15,
  },
  location: {
    color: colors.subtitle,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 4.87,
    letterSpacing: -0.48,
    marginBottom: 9,
  },
});

export default ContentProgram;
