import { Image, StyleSheet } from 'react-native';
import TextTitle from '@components/atoms/Text/TextTitle';
import colors from '@styles/colors';
import Spacing from '@styles/spacing';
import AmiScoreTable from '@components/molecules/Text/AmiScoreTable';
import AmiIntroduce from '@components/atoms/Text/AmiIntroduce';
import Separator from '@components/atoms/etc/Separator';

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
  'Contact: tripamics@trimami.co.kr\n';

function ContentAmi() {
  const dummyProfile = dummyData[0];
  return (
    <>
      <TextTitle style={styles.title}>Introduce AMI</TextTitle>
      <Image source={{ uri: dummyProfile.imgUrl }} style={styles.image} />
      <TextTitle style={styles.name}>{dummyProfile.name}</TextTitle>
      {dummyAmiData.map((score) => (
        <AmiScoreTable key={score.title} scores={score} />
      ))}
      <AmiIntroduce>{dummyIntroduce}</AmiIntroduce>
      <Separator hei={10} marginVer={20} />
    </>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.titleBlack,
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    marginLeft: Spacing.IOS392Margin,
    marginTop: 10,
  },
  image: {
    width: 120,
    height: 120,
    alignSelf: 'center',
    borderRadius: 100,
    marginTop: 30,
  },
  name: {
    color: colors.titleBlack,
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    alignSelf: 'center',
    marginTop: 5,
  },
});

export default ContentAmi;
