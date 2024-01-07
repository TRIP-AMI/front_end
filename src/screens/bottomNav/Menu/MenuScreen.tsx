import { StyleSheet, View } from 'react-native';
import Spacing from '@/styles/spacing';
import MenuItem, { MenuItemProps } from '@/components/atoms/Text/MenuItem';

const menuList: MenuItemProps[] = [
  { title: 'About TRIPAMI', path: 'About' },
  { title: 'Announcement', path: 'Announcement' },
  { title: 'FAQ', path: 'FAQ' },
  { title: '1:1 Inquiry', path: 'Inquiry' },
];

export default function MenuScreen() {
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
    paddingTop: 20,
    paddingHorizontal: Spacing.IOS392Margin,
  },
});
