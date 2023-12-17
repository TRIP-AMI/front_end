import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IconFullScreenModal from '@/components/molecules/Modal/IconFullScreenModal';
import BasicButton from '@/components/atoms/Button/BasicButton';
import { RootStackNavigationProp } from '@/types/NavigationTypes';

export default function JoinCompleteModal() {
  return (
    <IconFullScreenModal
      title='Membership registration has been completed!'
      button={<LoginButton />}
    />
  );
}

function LoginButton() {
  const { navigate } = useNavigation<RootStackNavigationProp>();

  return (
    <View style={styles.buttonContainer}>
      <BasicButton
        onPress={() => {
          navigate('Login');
        }}
        content='Login'
        round
      />
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingHorizontal: 20,
  },
});
