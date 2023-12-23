import { StyleSheet, Text, View } from 'react-native';
import Spacing from '@styles/spacing';
import Colors from '@styles/colors';
import ClipboardText from '@components/atoms/Text/ClipboardText';

function BookDetailInfo({
  location,
  date,
  requiredTime,
  applicantName,
  applicantEmail,
}: {
  location: string;
  date: string;
  requiredTime: string;
  applicantName: string;
  applicantEmail: string;
}) {
  const content = [
    { id: 1, title: 'Location', value: location },
    { id: 2, title: 'Date', value: date },
    { id: 3, title: 'Required Time', value: requiredTime },
    { id: 4, title: 'Applicant Name', value: applicantName },
    { id: 5, title: 'Applicant Email', value: applicantEmail },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.marginContainer}>
        {content.map((item, index) => (
          <>
            <Text style={styles.title} key={item.id.toString() + item.title}>
              {item.title}
            </Text>
            {item.title === 'Applicant Email' ? (
              <ClipboardText text={item.value} />
            ) : (
              <Text style={styles.value} key={item.id.toString() + item.value}>
                {item.value}
              </Text>
            )}
            {index !== content.length - 1 && (
              <View style={{ marginVertical: 10 }} />
            )}
          </>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.fontGray08,
    paddingVertical: 20,
  },
  marginContainer: {
    marginHorizontal: Spacing.IOS392Margin,
  },
  title: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 20,
  },
  value: {
    color: Colors.fontGray03,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 20,
  },
});

export default BookDetailInfo;
