import { useNavigation } from '@react-navigation/native';
import IconFullScreenView from '@/components/atoms/Modal/IconFullScreenView';
import BasicButton from '@/components/atoms/Button/BasicButton';
import useModalHook from '@/hooks/modalHook';
import { RootStackNavigationProp } from '@/types/NavigationTypes';

export default function ApplyCompleteModal() {
  const { resetModal } = useModalHook();
  const { navigate } = useNavigation<RootStackNavigationProp>();

  // TODO: application detail prop 정의
  const onPressButton = () => {
    resetModal();
    navigate('ApplicationDetails');
  };

  return (
    <IconFullScreenView
      title='Your application has been completed!'
      detail={`When the reservation is confirmed,\n we will inform you of the schedule\n by the email you entered.`}
      button={
        <BasicButton
          content='Application Details'
          round
          onPress={onPressButton}
        />
      }
      buttonStyle={{ paddingHorizontal: 64 }}
    />
  );
}
