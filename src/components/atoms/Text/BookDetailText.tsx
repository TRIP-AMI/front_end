import { StyleSheet, Text, View } from 'react-native';
import Separator from '@components/atoms/etc/Separator';
import Colors from '@styles/colors';

function BookDetailText({
  applicantName,
  title,
}: {
  applicantName: string;
  title: string;
}) {
  return (
    <>
      <Text style={styles.title}>Application complete</Text>
      <Separator color={Colors.fontGray03} hei={1} marginVer={15} />
      <View style={{ width: 296 }}>
        <Text style={[styles.text, styles.textPrimary]}>
          {applicantName}’s {title} program application has been completed!
        </Text>
        <Text style={styles.text}>
          Please check the information you booked below.
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 18,
  },
  textPrimary: {
    color: Colors.primary,
  },
  text: {
    color: Colors.fontGray03,
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    lineHeight: 20,
  },
});

export default BookDetailText;
