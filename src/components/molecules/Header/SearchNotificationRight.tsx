import { View, StyleSheet } from 'react-native';
import { Badge } from 'react-native-paper';
import { IconButton } from '@components/atoms/Button/IconButton';
import { useState } from 'react';
import useModalHook from '@/hooks/modalHook';

export default function SearchNotificationRight({
  theme = 'black',
}: {
  theme?: 'white' | 'black';
}) {
  const { setModalName } = useModalHook();

  const onSearchPress = () => {
    setModalName('SEARCH');
  };

  const onNotiPress = () => {
    setModalName('NOTIFICATION');
  };

  const [alarmCount] = useState(1);
  const alarmBadgeShow = alarmCount > 0;

  return (
    <View style={styles.container}>
      <View>
        <IconButton
          icon='search-outline'
          size={24}
          color={theme}
          onPress={onSearchPress}
        />
      </View>
      <View>
        <IconButton
          icon='notifications-outline'
          size={24}
          color={theme}
          onPress={onNotiPress}
        />
        <Badge size={7} visible={alarmBadgeShow} style={styles.badge} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  badge: {
    position: 'absolute',
    top: 2,
    right: 3,
  },
});
