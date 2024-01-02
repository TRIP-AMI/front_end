import { StyleSheet, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  MenuParamList,
  MenuStackNavigationProp,
} from '@/navigations/MainBottomNavTab/Menu/MenuStack';

export type MenuItemProps = {
  title: string;
  path: Exclude<keyof MenuParamList, 'AnnouncementDetail'>;
};

export default function MenuItem({ title, path }: MenuItemProps) {
  const navigation = useNavigation<MenuStackNavigationProp>();

  return (
    <Pressable onPress={() => navigation.navigate(path)}>
      <Text style={style.text}>{title}</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  text: {
    paddingVertical: 10,
    color: '#161616',
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    lineHeight: 22,
  },
});
