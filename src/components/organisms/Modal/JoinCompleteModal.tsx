import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconFullScreenModal from '@/components/molecules/Modal/IconFullScreenModal';
import BasicButton from '@/components/atoms/Button/BasicButton';
import useModalHook from '@/hooks/modalHook';
import { AuthStackNavigationProp } from '@/navigations/AuthStack/AuthStack';

export default function JoinCompleteModal({ title }: { title: string }) {
  const { navigate } = useNavigation<AuthStackNavigationProp>();
  const { resetModal } = useModalHook();

  const onPress = () => {
    navigate('Login');
    resetModal();
  };

  return (
    <IconFullScreenModal
      title={title}
      button={
        <View style={styles.buttonContainer}>
          <BasicButton onPress={onPress} content='Login' round />
        </View>
      }
      noClose
    />
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 118,
  },
});
