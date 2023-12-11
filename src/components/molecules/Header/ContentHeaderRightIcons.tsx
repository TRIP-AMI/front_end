import { View, StyleSheet } from 'react-native';
import { Badge } from 'react-native-paper';
import {
  FeatherIconButton,
  IconButton,
} from '@/components/atoms/Button/IconButton';
// import { useState } from 'react';
// import SearchModal from '@/components/organisms/Modal/SearchModal';

export default function ContentHeaderRightIcons() {
  // const [isVisible, setIsVisible] = useState(false);
  //
  // const onOpen = () => {
  //   setIsVisible(true);
  // };
  // const onClose = () => {
  //   setIsVisible(false);
  // };

  return (
    <View style={styles.container}>
      <View>
        <FeatherIconButton
          icon='share'
          size={24}
          color='black'
          onPress={() => {}}
        />
      </View>
      <View>
        <IconButton
          icon='notifications-outline'
          size={24}
          color='black'
          onPress={() => {}}
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
