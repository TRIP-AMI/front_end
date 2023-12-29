import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Spacing from '@/styles/spacing';
import { RootStackNavigationProp } from '@/types/NavigationTypes';

export default function UploadScreen() {
  const navigation = useNavigation<RootStackNavigationProp>();

  const handleCal = () => {
    navigation.navigate('Calendar');
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View>
        <Text>temp</Text>
        <Button title='calendar go' onPress={handleCal} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: Spacing.IOS392Margin,
  },
});
