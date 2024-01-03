import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Pressable } from 'react-native';
import { RootStackNavigationProp } from '@/navigations';

export default function RightCloseX({
  theme = 'black',
}: {
  theme?: 'black' | 'white';
}) {
  const { goBack } = useNavigation<RootStackNavigationProp>();

  const onClosePress = () => {
    goBack();
  };
  return (
    <Pressable onPress={onClosePress}>
      <AntDesign name='close' size={20} color={theme} />
    </Pressable>
  );
}
