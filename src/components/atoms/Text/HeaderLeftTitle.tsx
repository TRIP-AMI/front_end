import { View, Text } from 'react-native';
import Fonts from '@/styles/typography';

function HeaderLeftTitle({ title }: { title: string }) {
  return (
    <View>
      <Text style={Fonts.header.title}>{title}</Text>
    </View>
  );
}

export default HeaderLeftTitle;
