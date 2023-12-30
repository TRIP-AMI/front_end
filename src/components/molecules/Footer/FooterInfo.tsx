import { View, StyleSheet } from 'react-native';
import Colors from '@styles/colors';
import FooterDefaultText from '@components/atoms/Text/FooterDefaultText';
import ClipboardText from '@/components/atoms/Text/ClipboardText';

function FooterInfo() {
  const INFO = `\u2022 Address: Songpa-gu, Seoul
\u2022 Representative : JiHee SEO
\u2022 Business Registration Number : 620-72-00456`;

  const DETAIL = `For error reports and issues related to the website,
direct your inquiries to our web admin.`;

  return (
    <View>
      <FooterDefaultText>{INFO}</FooterDefaultText>
      <FooterDefaultText style={{ paddingBottom: 0, lineHeight: 15 }}>
        {DETAIL}
      </FooterDefaultText>
      <ClipboardText text='tripami.adm@gmail.com' textStyle={styles.email} />
    </View>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
  email: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 12,
    lineHeight: 18,
    color: Colors.primary,
  },
});

export default FooterInfo;
