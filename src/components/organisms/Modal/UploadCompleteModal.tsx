import { View, Text, StyleSheet, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import BasicButton from '@/components/atoms/Button/BasicButton';
import Colors from '@/styles/colors';
import useModalHook from '@/hooks/modalHook';
import { MainBottomTabNavigationProp } from '@/types/NavigationTypes';

export default function UploadCompleteModal() {
  const { navigate } = useNavigation<MainBottomTabNavigationProp>();
  const { resetModal } = useModalHook();
  const handleOnPress = () => {
    navigate('Home');
    resetModal();
  };

  return (
    <Modal animationType='slide' presentationStyle='fullScreen'>
      <SafeAreaView style={styles.container}>
        <Ionicons
          name='checkmark-circle-sharp'
          size={51}
          color={Colors.primary}
          style={{ marginTop: 206 }}
        />
        <Text style={styles.textStyle}>Your post has been uploaded.</Text>

        <View style={styles.buttonWrap}>
          <BasicButton
            content='Check your posts'
            onPress={handleOnPress}
            round
          />
        </View>
      </SafeAreaView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  textStyle: {
    marginTop: 30,
    color: 'black',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.32,
    textAlign: 'center',
  },
  buttonWrap: {
    width: 200,
    marginVertical: 60,
  },
});
