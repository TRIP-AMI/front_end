import { StyleSheet, Text, View } from 'react-native';
import TextTitle from '@components/atoms/Text/TextTitle';
import Spacing from '@styles/spacing';
import Separator from '@components/atoms/etc/Separator';
import Colors from '@styles/colors';

function ContentPayment() {
  return (
    <View>
      <View style={styles.container}>
        <TextTitle style={styles.title}>Payment</TextTitle>
        <Text>
          1. Apply{'\n'}2. Confirmation Notification Email{'\n'}3. Pay directly
          to AMI the day of the trip
        </Text>
      </View>
      <Separator color={Colors.lineGray02} hei={8} marginVer={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.IOS392Margin,
  },
  title: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    letterSpacing: -0.36,
    marginBottom: 15,
  },
  text: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.32,
  },
});

export default ContentPayment;
