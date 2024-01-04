import TextTitle from '@components/atoms/Text/TextTitle';
import { StyleSheet, View } from 'react-native';
import Spacing from '@styles/spacing';
import ContentProgramItem from '@components/molecules/Item/ContentProgramItem';

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
    <View style={styles.container}>
      <TextTitle style={styles.title}>Program</TextTitle>
      <View style={styles.programContainer}>
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
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.IOS392Margin,
    paddingVertical: 30,
  },
  title: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    letterSpacing: -0.36,
  },
  programContainer: {
    paddingTop: 15,
  },
});

export default ContentProgram;
