import { useSetRecoilState } from 'recoil';
import modalState from '@/utils/recoil/modal';
import BasicCheckModal from '@/components/atoms/Modal/BasicCheckModal';
import BasicModalText from '@/components/atoms/Text/BasicModalText';

export default function LoginInvalidModal() {
  const setModal = useSetRecoilState(modalState);

  const onCheck = () => {
    setModal(null);
  };

  return (
    <BasicCheckModal onCheck={onCheck}>
      <BasicModalText content='Please check your ID or password.' />
    </BasicCheckModal>
  );
}
