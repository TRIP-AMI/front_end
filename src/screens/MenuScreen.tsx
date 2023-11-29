import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  RootStackParamList,
  RootStackNavigationProp,
} from '@/types/NavigationTypes';

type MenuItemProps = {
  title: string;
  path: keyof RootStackParamList;
};

function MenuItem({ title, path }: MenuItemProps) {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View style={styles.menuItem}>
      <Pressable onPress={() => navigation.navigate(path)}>
        <Text>{title}</Text>
      </Pressable>
    </View>
  );
}

export default function MenuScreen() {
  const menuList: MenuItemProps[] = [
    { title: '서비스', path: 'Service' },
    { title: '배너 리스트', path: 'BannerList' },
    { title: '공지사항', path: 'Notification' },
    { title: 'FAQ', path: 'FAQ' },
    { title: '1:1 문의', path: 'Contact' },
  ];

  return (
    <View style={styles.container}>
      {menuList.map((item) => (
        <MenuItem key={item.path} title={item.title} path={item.path} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuItem: {
    margin: 10,
  },
});
