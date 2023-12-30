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
        score: 0,
        title: 'Experience',
      },
      {
        id: 2,
        score: 0,
        title: 'Review',
      },
      {
        id: 3,
        score: 0,
        title: 'Rating',
      },
    ],
  },
];

const dummyIntroduce =
  'Hi, My name is Jenny😊\n' +
  '\n' +
  "Welcome to Korea! I'll be your friends and help you make more wonderful memories in Korea :)\n" +
  '\n' +
  'First of all to introduce myself briefly, I am active and I like to meet friends and talk.\n' +
  '\n' +
  'I love listening to you guys, and I can tell you all my questions about Korea!\n' +
  '\n' +
  'I hope we can feel the way young Korean friends hang out route while taking delicious restaurants, cafes, and pictures together and become good friends🖤\n' +
  '\n' +
  'Available dates (select one)\n' +
  '- January 6, 2024\n' +
  '- January 6, 2024\n' +
  '- January 6, 2024\n' +
  '- January 6, 2024\n' +
  '- January 6, 2024\n' +
  '\n' +
  'Contact: tripamics@trimami.co.kr';

function ContentAmi() {
  const dummyProfile = dummyData[0];
  return (
    <View
      style={{ paddingVertical: 20, paddingHorizontal: Spacing.IOS392Margin }}
    >
      <TextTitle style={styles.title}>Introduce AMI</TextTitle>
      <View style={{ paddingBottom: 12 }}>
        <AmiProfile imgUrl={dummyProfile.imgUrl} name={dummyProfile.name} />
      </View>
      {dummyAmiData.map((score) => (
        <AmiScoreTable key={score.title} scores={score} />
      ))}
      <AmiIntroduce>{dummyIntroduce}</AmiIntroduce>
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
