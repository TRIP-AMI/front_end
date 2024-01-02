import { FlatList } from 'react-native';
import DropToggle from '@/components/molecules/Toggle/DropToggle';

const data = [
  {
    id: '1',
    title: '1. What kind of service is TRIPAMI?',
    content:
      'It is a service in which Korean locals introduce hidden places throughout Korea to travelers.',
  },
  {
    id: '2',
    title: '2. What is the role of AMI?',
    content:
      'AMI becomes a customized guide or friend for travelers at various places and times such as travel destinations, restaurants, and concerts.',
  },
  {
    id: '3',
    title: '3. Does the program run on the course?',
    content:
      'It will be carried out according to the course shown in the program, but it can be flexibly adjusted by ARMY and travelers.',
  },
];

export default function FAQSection() {
  return (
    <FlatList
      data={data}
      renderItem={(item) => (
        <DropToggle
          key={item.item.id}
          title={item.item.title}
          content={item.item.content}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
}
