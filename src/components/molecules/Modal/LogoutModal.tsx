import BasicTwoButtonModal from '@components/atoms/Modal/BasicTwoButtonsModal';
import useLoginHook from '@hooks/loginHook';
import useModalHook from '@hooks/modalHook';
import BasicModalText from '@components/atoms/Text/BasicModalText';

function LogoutModal() {
  const { onLogout } = useLoginHook();
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
