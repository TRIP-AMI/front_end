import { View } from 'react-native';
import HomeSection from '@components/molecules/ImageList/HomeSection';

const dummyList = [
  {
    title: 'Recommended AMIs',
    data: [
      {
        id: 1,
        title: 'item1',
        imgUrl: 'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
      },
      {
        id: 2,
        title: 'item2',
        imgUrl: 'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
      },
      {
        id: 3,
        title: 'item3',
        imgUrl: 'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
      },
      {
        id: 4,
        title: 'item4',
        imgUrl: 'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
      },
      {
        id: 5,
        title: 'item5',
        imgUrl: 'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
      },
    ],
  },
  {
    title: 'AMIs of Today',
    data: [
      {
        id: 1,
        title: 'item1',
        imgUrl: 'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
      },
      {
        id: 2,
        title: 'item2',
        imgUrl: 'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
      },
      {
        id: 3,
        title: 'item3',
        imgUrl: 'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
      },
      {
        id: 4,
        title: 'item4',
        imgUrl: 'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
      },
      {
        id: 5,
        title: 'item5',
        imgUrl: 'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
      },
    ],
  },
];

export default function HomeSectionList() {
  return (
    <View>
      {dummyList.map((section) => (
        <HomeSection key={section.title} section={section} />
      ))}
    </View>
  );
}
