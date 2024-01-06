import { View, StyleSheet } from 'react-native';
import { Badge } from 'react-native-paper';
import { IconButton } from '@components/atoms/Button/IconButton';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '@/navigations';

export default function SearchNotificationRight({
  theme = 'black',
}: {
  theme?: 'white' | 'black';
}) {
  const { navigate } = useNavigation<RootStackNavigationProp>();

  const onSearchPress = () => {
    navigate('Search');
  };

  const onNotiPress = () => {
    navigate('Notification');
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
