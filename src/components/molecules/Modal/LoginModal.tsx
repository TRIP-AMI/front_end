import { useSetRecoilState } from 'recoil';
import AsyncStorage from '@react-native-async-storage/async-storage';
import modalState from '@/utils/recoil/modal';
import BasicTwoButtonModal from '@/components/atoms/Modal/BasicTwoButtonsModal';
import loginState from '@/utils/recoil/login';

export default function LoginModal() {
  const setModal = useSetRecoilState(modalState);
  const setIsLoggedIn = useSetRecoilState(loginState);

  const onClose = () => {
    setModal(null);
  };

  // TODO: Login 화면 이동으로 수정 예정
  const onConfirm = () => {
    console.log('login');
    AsyncStorage.setItem('token', 'test');
    setIsLoggedIn(true);
    setModal(null);
  };

  return (
    <BasicTwoButtonModal
      content='The service will be available after login.'
      cancelText='Cancel'
      confirmText='Login'
      onClose={onClose}
      onConfirm={onConfirm}
    />
  );
}