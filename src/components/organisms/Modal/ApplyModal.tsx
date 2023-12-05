import { useState } from 'react';
import BasicBottomModal from '@components/atoms/Modal/BasicBottomModal';
import SelectBox from '@/components/molecules/etc/SelectBox';
import StyledButton from '@/components/atoms/Buttons/StyledButton';
import SelectedOptionCard from '@/components/atoms/Card/SelectedOptionCard';

// TODO: 상세 페이지에서 prop으로 받아오기
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
  const [selectOpen, setSelectOpen] = useState(false);

  // TODO: Apply 버튼 누르면 확인 모달 띄우기
  const onApply = () => {
    console.log(selectedDate);
    onClose();
  };

  const onDismiss = () => {
    setSelectedDate('');
  };

  return (
    <BasicBottomModal
      isVisible={isVisible}
      onClose={onClose}
      onDismiss={onDismiss}
      selectOpen={selectOpen}
      setSelectOpen={setSelectOpen}
    >
      {/* Select Options */}
      <SelectBox
        dates={dates}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectOpen={selectOpen}
        setSelectOpen={setSelectOpen}
      />
      {!selectOpen && selectedDate && (
        <SelectedOptionCard
          selectedItem={selectedDate}
          setSelectedItem={setSelectedDate}
        />
      )}
      <StyledButton content='Apply' onPress={onApply} />
    </BasicBottomModal>
  );
}
