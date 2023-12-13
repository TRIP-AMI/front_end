import TextTitle from '@components/atoms/Text/TextTitle';
import { StyleSheet, View } from 'react-native';
import Spacing from '@styles/spacing';
import ContentLocation from '@components/atoms/Text/ContentLocation';
import Colors from '@styles/colors';
import ContentProgramItem from '@components/molecules/Item/ContentProgramItem';
import Separator from '@components/atoms/etc/Separator';

const dummyProgram = [
  {
    id: 1,
    location: 'Gyeongbokgung Station',
    detail: 'Meeting at Exit 2 of Gyeongbokgung Station',
    imgUrl: 'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
    travelTime: {
      distance: 1,
      walkingTime: 5,
      carTime: 0,
    },
  },
  {
    id: 2,
    location: 'Hanokdal Restaurant (1 hour)',
    detail: '9, Jahamun-ro 1-ga-gil, Jongno-gu, Seoul',
    imgUrl: 'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
    travelTime: {
      distance: 1,
      walkingTime: 5,
      carTime: 0,
    },
  },
  {
    id: 3,
    location: 'Daelim Art Museum (2 hours)',
    detail: '21, Jahamun-ro 4-gil, Jongno-gu, Seoul',
    imgUrl: 'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
    travelTime: {
      distance: 1,
      walkingTime: 5,
      carTime: 0,
    },
  },
  {
    id: 4,
    location: 'Tidewater Cafe (1 hour)',
    detail: '21-16, Jahamun-ro 11-gil, Jongno-gu, Seoul',
    imgUrl: 'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
    travelTime: null,
  },
];

function ContentProgram() {
  return (
    <View>
      <TextTitle style={styles.title}>Program</TextTitle>
      <ContentLocation style={styles.location} location='Jongno, Seoul' />
      {dummyProgram.map((item) => (
        <ContentProgramItem
          key={item.id}
          order={item.id}
          location={item.location}
          detail={item.detail}
          imageUrl={item.imgUrl}
          travelTime={item.travelTime}
        />
      ))}
      <Separator color={Colors.lineGray05} hei={8} marginVer={30} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    letterSpacing: -0.36,
    marginBottom: 15,
    marginLeft: Spacing.IOS392Margin,
  },
  location: {
    color: Colors.fontGray03,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    marginLeft: 4.87,
    letterSpacing: -0.48,
    marginBottom: 9,
  },
});

export default ContentProgram;
