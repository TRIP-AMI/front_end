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
  return (
    <View style={styles.container}>
      <View>
        <IconButton
          icon='arrow-back'
          size={24}
          color={theme}
          onPress={() => {
            console.log('stacks', stackLength);
            if (stackLength > 1) navigation.goBack();
            else
              navigation.navigate('MainBottomNavTab', {
                screen: 'Home',
              });
          }}
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
