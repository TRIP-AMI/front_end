import { View, StyleSheet } from 'react-native';
import TextTitle from '@components/atoms/Text/TextTitle';
import Spacing from '@styles/spacing';
import AmiScoreTable from '@components/molecules/Text/AmiScoreTable';
import AmiIntroduce from '@components/atoms/Text/AmiIntroduce';
import AmiProfile from '@components/molecules/Item/AmiProfile';

const dummyData = [
  {
    id: 1,
    name: 'Jenny',
    imgUrl: 'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
  },
];

const dummyAmiData = [
  {
    title: 'AmiScore',
    data: [
      {
        id: 1,
        key: 'Experience',
        score: 0,
        title: 'Experience',
      },
      {
        id: 2,
        key: 'Review',
        score: 0,
        title: 'Review',
      },
      {
        id: 3,
        key: 'Rating',
        score: 0,
        title: 'Rating',
      },
    ],
  },
];

type ContentAmiProps = {
  amiId: number;
  content: string;
};

function ContentAmi({ amiId, content }: ContentAmiProps) {
  const dummyProfile = dummyData[0];
  console.log(`amiId: ${amiId}`);
  // TODO: amiId로 ami 정보 가져오기, 눌렀을 때 아미 소개로 이동
  return (
    <View
      style={{ paddingVertical: 30, paddingHorizontal: Spacing.IOS392Margin }}
    >
      <TextTitle style={styles.title}>Introduce AMI</TextTitle>
      <View style={{ paddingTop: 20, paddingBottom: 12 }}>
        <AmiProfile imgUrl={dummyProfile.imgUrl} name={dummyProfile.name} />
      </View>
      {dummyAmiData.map((score) => (
        <AmiScoreTable key={score.title} scores={score} />
      ))}
      <AmiIntroduce>{content}</AmiIntroduce>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    letterSpacing: -0.36,
  },
});

export default ContentAmi;
