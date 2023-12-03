import { StyleSheet, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  RootStackParamList,
  RootStackNavigationProp,
} from '@/types/NavigationTypes';

export type MenuItemProps = {
  title: string;
  path: keyof RootStackParamList;
};

export default function MenuItem({ title, path }: MenuItemProps) {
  const navigation = useNavigation<RootStackNavigationProp>();

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
