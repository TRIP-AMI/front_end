import { View, StyleSheet } from 'react-native';
import { Badge } from 'react-native-paper';
import { IconButton } from '@components/atoms/IconButton/IconButton';
import { useState } from 'react';
import SearchModal from '@/components/organisms/Modal/SearchModal';

export default function HomeHeaderIcons() {
  const [isVisible, setIsVisible] = useState(false);

  const onOpen = () => {
    setIsVisible(true);
  };
  const onClose = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={{ padding: 4 }}>
        <IconButton icon='search' size={24} color='black' onPress={onOpen} />
        <SearchModal isVisible={isVisible} onClose={onClose} />
      </View>
      <View style={{ padding: 4 }}>
        <IconButton
          icon='notifications-outline'
          size={24}
          color='black'
          onPress={() => {}}
        />
        <Badge size={7} visible style={styles.badge} />
      </View>

      {
        // TODO: 추후에 추가될 예정
        /* <View style={{ padding: 4 }}>
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
