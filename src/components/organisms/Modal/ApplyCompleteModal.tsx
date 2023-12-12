import { useRecoilValue } from 'recoil'; // TODO: 지우기
import { useEffect } from 'react';
import IconFullScreenModal from '@/components/molecules/Modal/IconFullScreenModal';
import modalState from '@/utils/recoil/modal';

export default function ApplyCompleteModal() {
  const modal = useRecoilValue(modalState);

  useEffect(() => {
    // console.log(Fonts.modal.title);
    console.log(modal?.modalName);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <IconFullScreenModal
      title='Your application has been completed!'
      detail={`When the reservation is confirmed,\n we will inform you of the schedule\n by the email you entered.`}
    />
  );
}
