import { StyleSheet, Text, View } from 'react-native';
import TextTitle from '@components/atoms/Text/TextTitle';
import Spacing from '@styles/spacing';

function ContentPayment() {
  return (
    <View style={styles.container}>
      <TextTitle style={styles.title}>Payment</TextTitle>
      <Text style={styles.text}>
        1. Apply{'\n'}2. Confirmation Notification Email{'\n'}3. Pay directly to
        AMI the day of the trip
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.IOS392Margin,
    paddingVertical: 30,
  },
  title: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    letterSpacing: -0.36,
  },
  text: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.32,
    lineHeight: 20,
    paddingTop: 15,
    paddingHorizontal: '6.5%',
  },
});

export default ContentPayment;
