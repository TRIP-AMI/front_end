import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Badge } from 'react-native-paper';
import { RootStackNavigationProp } from '@/navigations';
import { IconButton } from '@/components/atoms/Button/IconButton';

export default function NotificationButton({
  theme = 'black',
}: {
  theme?: 'white' | 'black';
}) {
  const { navigate } = useNavigation<RootStackNavigationProp>();
  // TODO: get alarm count from server
  const [alarmCount] = useState(1);
  const alarmBadgeShow = alarmCount > 0;

  const onNotiPress = () => {
    navigate('Notification');
  };

  return (
    <View>
      <IconButton
        icon='notifications-outline'
        size={24}
        color={theme}
        onPress={onNotiPress}
      />
      <Badge size={7} visible={alarmBadgeShow} style={styles.badge} />
    </View>
  );
}

const styles = StyleSheet.create({
  badge: {
    position: 'absolute',
    top: 2,
    right: 3,
  },
});
