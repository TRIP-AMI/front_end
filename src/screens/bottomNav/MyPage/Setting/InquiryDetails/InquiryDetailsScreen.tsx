import EmptyText from '@components/atoms/Text/EmptyText';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import InquirySection from '@components/molecules/Section/InquirySection';
import TotalText from '@components/atoms/Text/TotalText';
import Spacing from '@styles/spacing';

const data = [
  {
    id: 1,
    title: 'How do I find the password?',
    date: '07.12.2023',
    content:
      'It is a service in which Korean locals introduce hidden places throughout Korea to travelers.',
    contentDate: '07.12.2023',
  },
  {
    id: 2,
    title: `It's written like this when it's two lines.\nIt's written like this when it's two lines.`,
    date: '07.12.2023',
    content: '',
    contentDate: null,
  },
  {
    id: 3,
    title: 'How do I find the password?',
    date: '07.12.2023',
    content: '',
    contentDate: null,
  },
];

function InquiryDetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <TotalText total={data.length} />
      </View>
      {data.length === 0 ? (
        <EmptyText text='There is no Inquiry details.' fullScreen />
      ) : (
        <InquirySection data={data} />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    paddingTop: 10,
    marginHorizontal: Spacing.IOS392Margin,
  },
});

export default InquiryDetailsScreen;
