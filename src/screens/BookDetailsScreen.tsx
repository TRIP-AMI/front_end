import { View, SafeAreaView, StyleSheet } from 'react-native';
import Spacing from '@styles/spacing';
import BookDetailText from '@components/atoms/Text/BookDetailText';
import BookDetailInfo from '@components/atoms/Text/BookDetailInfo';
import BookDetailContent from '@components/atoms/Text/BookDetailContent';

// TODO 추후 api 확인하여 알맞게 수정하기
const dummyProgramData = {
  title: 'Introduce Our Service',
  date: '07.12.2023',
  imgUrl: 'https://via.placeholder.com/600x600/ECECEC',
};

const dummyContentData = {
  location: '3-11, Jamsil-dong, Songpa-gu, Seoul',
  date: 'January 6, 2024',
  requiredTime: '4 hours',
  applicantName: 'Jenny',
  applicantEmail: 'tripamics@tripami.co.kr',
};

function BookDetailsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.textContainer}>
          <BookDetailText />
        </View>
        <View style={styles.content}>
          <BookDetailInfo
            location={dummyContentData.location}
            date={dummyContentData.date}
            requiredTime={dummyContentData.requiredTime}
            applicantName={dummyContentData.applicantName}
            applicantEmail={dummyContentData.applicantEmail}
          />
        </View>
        <View>
          <BookDetailContent
            title={dummyProgramData.title}
            date={dummyProgramData.date}
            imgUrl={dummyProgramData.imgUrl}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  subContainer: {
    marginHorizontal: Spacing.IOS392Margin,
  },
  textContainer: {
    marginTop: 25,
    marginBottom: 30,
  },
  content: {
    marginBottom: 25,
  },
});

export default BookDetailsScreen;
