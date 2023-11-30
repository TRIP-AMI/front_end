import { View, StyleSheet } from 'react-native';
import { Badge } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from '@components/atoms/IconButton/IconButton';
import { RootStackNavigationProp } from '@/types/NavigationTypes';

export default function HomeHeaderIcons() {
  const navigation = useNavigation<RootStackNavigationProp>();

  return (
    <View style={styles.container}>
      <View>
        <IconButton
          icon='search'
          size={24}
          onPress={() => navigation.navigate('Search')}
        />
      </View>
      <View>
        <IconButton
          icon='notifications-outline'
          size={24}
          onPress={() => console.log('notification')}
        />
        <Badge size={7} visible style={styles.badge} />
      </View>
      <View>
        <IconButton
          icon='globe-outline'
          size={24}
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
