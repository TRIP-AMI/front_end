import { View, SafeAreaView, StyleSheet } from 'react-native';
import Spacing from '@styles/spacing';
import BookDetailText from '@components/atoms/Text/BookDetailText';
import BookDetailInfo from '@components/atoms/Text/BookDetailInfo';
import BookDetailContent from '@components/atoms/Text/BookDetailContent';
import { useRecoilValue } from 'recoil';
import profileType from '@utils/recoil/profile';

// TODO 추후 api 확인하여 알맞게 수정하기
const dummyProgramData = {
  title: 'Introduce Our Service',
  date: '07.12.2023',
  imgUrl: 'https://via.placeholder.com/600x600/ECECEC',
};

const dummyContentData = {
  title: 'Itaewon Tour',
  location: '3-11, Jamsil-dong, Songpa-gu, Seoul',
  date: 'January 6, 2024',
  requiredTime: '4 hours',
  amiName: 'Ami',
  amiEmail: 'tripamics@tripami.co.kr',
  applicantName: 'Tourist',
  applicantEmail: 'tripamics@tripami.co.kr',
};

function BookDetailsScreen() {
  const contentData = dummyContentData;
  const profile = useRecoilValue(profileType);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.textContainer}>
          <BookDetailText
            title={contentData.title}
            applicantName={contentData.amiName}
          />
        </View>
        <View style={styles.content}>
          <BookDetailInfo
            location={contentData.location}
            date={contentData.date}
            requiredTime={contentData.requiredTime}
            name={
              profile === 'AMI'
                ? contentData.applicantName
                : contentData.amiName
            }
            email={
              profile === 'AMI'
                ? contentData.applicantEmail
                : contentData.amiEmail
            }
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
