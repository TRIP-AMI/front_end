import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from '@/components/atoms/Button/IconButton';
import { RootStackNavigationProp } from '@/navigations';

export default function BackLeftArrow({
  theme = 'black',
}: {
  theme?: 'white' | 'black';
}) {
  const navigation = useNavigation<RootStackNavigationProp>();
  const stackLength = navigation.getState().routes.length;
  console.log('stacks', stackLength);

  // TODO : deep link 시 goBack()이 안되는 문제 해결
  const onPress = () => {
    // if (stackLength === 1)
    //   navigation.navigate('MainBottomNavTab', { screen: 'Home' });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View>
        <IconButton
          icon='arrow-back'
          size={24}
          color={theme}
          onPress={onPress}
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
