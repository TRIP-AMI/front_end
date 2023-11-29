import { View, StyleSheet } from 'react-native';
import Colors from '@styles/colors';
import TextTitle from '../../atoms/Text/TextTitle';
import FooterPolicies from '../../molecules/Footer/FooterPolicies';
import FooterInfo from '../../molecules/Footer/FooterInfo';

export default function HomeFooter() {
  return (
    <View style={styles.container}>
      {/* title */}
      <TextTitle>TRIPAMI CO.LTD</TextTitle>
      {/* info */}
      <FooterInfo />
      {/* policies */}
      <FooterPolicies />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 180,
    justifyContent: 'space-evenly',
    padding: 10,
    backgroundColor: Colors.footerBackground,
  },
});
