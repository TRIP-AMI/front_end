import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconFullScreenModal from '@/components/molecules/Modal/IconFullScreenModal';
import BasicButton from '@/components/atoms/Button/BasicButton';
import { RootStackNavigationProp } from '@/types/NavigationTypes';
import useModalHook from '@/hooks/modalHook';

export default function JoinCompleteModal() {
  return (
    <IconFullScreenModal
      title='Membership registration has been completed!'
      button={<LoginButton />}
      noClose
    />
  );
}

function LoginButton() {
  const { navigate } = useNavigation<RootStackNavigationProp>();
  const { resetModal } = useModalHook();

  const onPress = () => {
    navigate('Login');
    resetModal();
  };

  return (
    <View style={styles.buttonContainer}>
      <BasicButton onPress={onPress} content='Login' round />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 80,
  },
});
