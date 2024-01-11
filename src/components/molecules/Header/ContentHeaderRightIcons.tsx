import { useNavigation } from '@react-navigation/native';
import { View, StyleSheet, Share } from 'react-native';
import { Badge } from 'react-native-paper';
import {
  FeatherIconButton,
  IconButton,
} from '@/components/atoms/Button/IconButton';
import { RootStackNavigationProp } from '@/navigations';

export default function ContentHeaderRightIcons() {
  const { navigate } = useNavigation<RootStackNavigationProp>();

  // TODO: 공유 기능 구현
  const onSharePress = async () => {
    await Share.share({
      url: 'https://www.tripami.co.kr/',
    });
  };

  const onNotiPress = () => {
    navigate('Notification');
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
