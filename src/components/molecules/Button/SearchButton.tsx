import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';
import { RootStackNavigationProp } from '@/navigations';
import { IconButton } from '@/components/atoms/Button/IconButton';

export default function SearchButton({
  theme = 'black',
}: {
  theme?: 'white' | 'black';
}) {
  const { navigate } = useNavigation<RootStackNavigationProp>();

  const onSearchPress = () => {
    navigate('Search');
  };

  return (
    <View>
      <IconButton
        icon='search-outline'
        size={24}
        color={theme}
        onPress={onSearchPress}
      />
    </View>
  );
}
