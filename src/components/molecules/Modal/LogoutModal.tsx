import BasicTwoButtonModal from '@components/atoms/Modal/BasicTwoButtonsModal';
import useModalHook from '@hooks/modalHook';
import BasicModalText from '@components/atoms/Text/BasicModalText';
import useToken from '@/hooks/tokenHook';

function LogoutModal() {
  const { onLogout } = useToken();
  const { resetModal } = useModalHook();

  const logout = () => {
    resetModal();
    onLogout();
  };

  return (
    <BasicTwoButtonModal
      cancelText='Cancel'
      confirmText='Logout'
      onClose={resetModal}
      onConfirm={logout}
    >
      <BasicModalText
        content='Do you want to logout?'
        style={{ textAlign: 'center' }}
      />
    </BasicTwoButtonModal>
  );
}

export default LogoutModal;
