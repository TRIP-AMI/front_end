import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet } from 'react-native';
import TextButton from '@/components/atoms/Button/TextButton';
import { RootStackNavigationProp } from '@/navigations';
import JOIN_TERMS from '@/constants/joinTerms';

function FooterPolicies() {
  const { navigate } = useNavigation<RootStackNavigationProp>();
  return (
    <View style={styles.policies}>
      <TextButton
        title='Privacy Policy'
        onPress={() =>
          navigate('TermsStack', {
            screen: 'Privacy',
            params: {
              en: JOIN_TERMS[1].detail_en,
              ko: JOIN_TERMS[1].detail_ko,
            },
          })
        }
        style={styles.text}
      />
      <View style={{ width: 1, height: 12, backgroundColor: '#CECECE' }} />
      <TextButton
        title='Terms of Service'
        onPress={() =>
          navigate('TermsStack', {
            screen: 'Terms',
            params: {
              en: JOIN_TERMS[2].detail_en,
              ko: JOIN_TERMS[2].detail_ko,
            },
          })
        }
        style={[styles.text, { paddingLeft: 15 }]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  policies: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 10,
  },
  bar: {
    width: 1,
    height: 12,
    backgroundColor: '#6E6E6E',
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    lineHeight: 20,
    color: '#E9E9E9',
    paddingRight: 15,
  },
});

export default FooterPolicies;
