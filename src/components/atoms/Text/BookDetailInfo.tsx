import { StyleSheet, Text, View } from 'react-native';
import Spacing from '@styles/spacing';
import Colors from '@styles/colors';
import ClipboardText from '@components/atoms/Text/ClipboardText';
import { useRecoilValue } from 'recoil';
import profileType from '@utils/recoil/profile';

function BookDetailInfo({
  location,
  date,
  requiredTime,
  name,
  email,
}: {
  location: string;
  date: string;
  requiredTime: string;
  name: string;
  email: string;
}) {
  const profile = useRecoilValue(profileType);
  const content = [
    { id: 1, title: 'Location', value: location },
    { id: 2, title: 'Date', value: date },
    { id: 3, title: 'Required Time', value: requiredTime },
  ];
  if (profile === 'AMI') {
    content.push({ id: 4, title: 'Applicant Name', value: name });
    content.push({ id: 5, title: 'Applicant E-mail', value: email });
  } else if (profile === 'TOURIST') {
    content.push({ id: 5, title: 'AMI E-mail', value: email });
  }
  return (
    <View style={styles.container}>
      <View style={styles.marginContainer}>
        {content.map((item, index) => (
          <>
            <Text style={styles.title} key={item.id.toString() + item.title}>
              {item.title}
            </Text>
            {item.title.slice(-4) === 'mail' ? (
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
