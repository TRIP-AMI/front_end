import { StyleSheet, View } from 'react-native';
import Spacing from '@/styles/spacing';
import MenuItem, { MenuItemProps } from '@/components/atoms/Text/MenuItem';

export default function MenuScreen() {
  const menuList: MenuItemProps[] = [
    { title: 'Service', path: 'Service' },
    { title: 'Event', path: 'BannerList' },
    { title: 'Notification', path: 'Notification' },
    { title: 'FAQ', path: 'FAQ' },
    { title: '1:1 Inquiry', path: 'Inquiry' },
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
    paddingTop: 42 - 10,
    paddingHorizontal: Spacing.IOS392Margin,
  },
});
