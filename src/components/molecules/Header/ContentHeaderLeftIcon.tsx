import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IconButton } from '@/components/atoms/Button/IconButton';
import { RootStackNavigationProp } from '@/types/NavigationTypes';

export default function ContentHeaderLeftIcon() {
  const navigation = useNavigation<RootStackNavigationProp>();
  return (
    <View style={styles.container}>
      <View>
        <IconButton
          icon='arrow-back'
          size={24}
          color='black'
          onPress={() => {
            navigation.goBack();
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
