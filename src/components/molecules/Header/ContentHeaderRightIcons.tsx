import { View, StyleSheet, Share } from 'react-native';
import { Badge } from 'react-native-paper';
import {
  FeatherIconButton,
  IconButton,
} from '@/components/atoms/Button/IconButton';
import useModalHook from '@/hooks/modalHook';

export default function ContentHeaderRightIcons() {
  const { setModalName } = useModalHook();

  // TODO: 공유 기능 구현
  const onSharePress = async () => {
    await Share.share({
      url: 'https://www.tripami.co.kr/',
    });
  };

  const onNotiPress = () => {
    setModalName('NOTIFICATION');
  };

  return (
    <View style={styles.container}>
      <View>
        <FeatherIconButton
          icon='share'
          size={24}
          color='black'
          onPress={onSharePress}
        />
      </View>
      <View>
        <IconButton
          icon='notifications-outline'
          size={24}
          color='black'
          onPress={onNotiPress}
        />
        <Badge size={7} visible style={styles.badge} />
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
