import { View, StyleSheet } from 'react-native';
import { FeatherIconButton } from '@components/atoms/Button/IconButton';
import { useNavigation } from '@react-navigation/native';
import { MyPageStackNavigationProp } from '@/navigations/MainBottomNavTab/MyPage/MyPageStack';

export default function SettingIcon() {
  const navigation = useNavigation<MyPageStackNavigationProp>();
  const onOpen = () => {
    navigation.navigate('Setting');
  };

  return (
    <View style={styles.container}>
      <FeatherIconButton
        icon='settings'
        size={24}
        color='#121212'
        onPress={onOpen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
