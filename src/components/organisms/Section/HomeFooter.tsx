import { View, Text, StyleSheet } from 'react-native';
import Colors from '@styles/colors';
import FooterPolicies from '@/components/molecules/Footer/FooterPolicies';
import FooterInfo from '@/components/molecules/Footer/FooterInfo';

export default function HomeFooter() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>TRIPAMI</Text>
      <FooterInfo />
      <FooterPolicies />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-evenly',
    backgroundColor: Colors.footerBackground,
    paddingHorizontal: 24,
    paddingVertical: 20,
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 16,
    color: 'white',
    paddingVertical: 10,
  },
});
