import { View, StyleSheet } from 'react-native';
import { Badge } from 'react-native-paper';
import { IconButton } from '@components/atoms/Button/IconButton';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import useLoginHook from '@/hooks/loginHook';
import useModalHook from '@/hooks/modalHook';
import { RootStackNavigationProp } from '@/navigations';

export default function HomeHeaderIcons() {
  const { setModalName } = useModalHook();
  const { onLogout } = useLoginHook();
  const { navigate } = useNavigation<RootStackNavigationProp>();

  const onSearchPress = () => {
    setModalName('SEARCH');
  };

  const onNotiPress = () => {
    navigate('Notification');
  };

  const [alarmCount] = useState(1);
  const alarmBadgeShow = alarmCount > 0;

  return (
    <View style={styles.container}>
      {/* TODO: 임시 로그아웃 버튼 지우기 */}
      <View>
        <IconButton icon='close' size={24} color='red' onPress={onLogout} />
      </View>
      <View>
        <IconButton
          icon='search'
          size={24}
          color='black'
          onPress={onSearchPress}
        />
      </View>
      <View>
        <IconButton
          icon='notifications-outline'
          size={24}
          color='black'
          onPress={onNotiPress}
        />
        <Badge size={7} visible={alarmBadgeShow} style={styles.badge} />
      </View>

      {
        // TODO: 추후에 추가될 예정
        /* <View>
        <IconButton
          icon='globe-outline'
          size={24}
          color='black'
          onPress={() => console.log('globe')}
        />
      </View> */
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  badge: {
    position: 'absolute',
    top: 2,
    right: 3,
  },
});
