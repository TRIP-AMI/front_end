import { useState } from 'react';
import BasicBottomModal from '@components/atoms/Modal/BasicBottomModal';
import SelectBox from '@/components/molecules/etc/SelectBox';
import StyledButton from '@/components/atoms/Buttons/StyledButton';

const dates = [
  'January 2, 2024',
  'January 3, 2024',
  'January 4, 2024',
  'January 5, 2024',
  'January 6, 2024',
];

export default function ApplyModal({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) {
  const [selectedDate, setSelectedDate] = useState('');

  const onApply = () => {
    console.log('apply');
    onClose();
  };

  return (
    <BasicBottomModal isVisible={isVisible} onClose={onClose}>
      {/* select box => dropdown 컴포넌트로 수정 예정 */}
      <SelectBox
        dates={dates}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <StyledButton content='Apply' onPress={onApply} />
    </BasicBottomModal>
  );
}
