import { View, StyleSheet } from 'react-native';
import { Badge } from 'react-native-paper';
// import { useNavigation } from '@react-navigation/native';
import { IconButton } from '@components/atoms/IconButton/IconButton';
import { useState } from 'react';
// import { RootStackNavigationProp } from '@/types/NavigationTypes';
import SearchModal from '@/components/organisms/Modal/SearchModal';

export default function HomeHeaderIcons() {
  // const navigation = useNavigation<RootStackNavigationProp>();

  const [isVisible, setIsVisible] = useState(false);

  const onOpen = () => {
    setIsVisible(true);
  };
  const onClose = () => {
    setIsVisible(false);
  };

  return (
    <View style={styles.container}>
      <View>
        <IconButton
          icon='search'
          size={24}
          color='black'
          // onPress={() => navigation.navigate('Search')}
          onPress={onOpen}
        />
        <SearchModal isVisible={isVisible} onClose={onClose} />
      </View>
      <View>
        <IconButton
          icon='notifications-outline'
          size={24}
          color='black'
          onPress={() => console.log('notification')}
        />
        <Badge size={7} visible style={styles.badge} />
      </View>
      <View>
        <IconButton
          icon='globe-outline'
          size={24}
          color='black'
          onPress={() => console.log('globe')}
        />
      </View>
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
