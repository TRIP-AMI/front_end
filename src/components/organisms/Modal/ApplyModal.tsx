import { useState } from 'react';
import BasicBottomModal from '@components/atoms/Modal/BasicBottomModal';
import SelectBox from '@/components/molecules/etc/SelectBox';
import {
  BasicModalHeader,
  ModalHeaderWithTitle,
} from '@/components/atoms/Modal/ModalHeader';
import ApplyModalContent from '@/components/molecules/Modal/ApplyModalContent';

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
  const originalPrice = 150000; // TODO: 상세 페이지에서 prop으로 받아오기
  const [selectedDate, setSelectedDate] = useState('');
  const [selectOpen, setSelectOpen] = useState(false);
  const [price, setPrice] = useState(originalPrice); // TODO: 상세 페이지에서 prop으로 받아오기
  // TODO: Apply 버튼 누르면 확인 모달 띄우기
  const onApply = () => {
    console.log(
      `date: ${selectedDate}, count: ${price / originalPrice}, price: ${price}`,
    );
    setPrice(originalPrice);
    onClose();
  };

  const onDismiss = () => {
    setSelectedDate('');
    setPrice(originalPrice);
  };

  return (
    <BasicBottomModal
      isVisible={isVisible}
      onClose={onClose}
      onDismiss={onDismiss}
      header={
        selectOpen ? (
          <ModalHeaderWithTitle
            icon='chevron-back'
            title='Select Options'
            onClose={() => setSelectOpen(false)}
          />
        ) : (
          <BasicModalHeader icon='chevron-down' onClose={onClose} />
        )
      }
    >
      {/* Select Options */}
      <SelectBox
        dates={dates}
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        selectOpen={selectOpen}
        setSelectOpen={setSelectOpen}
      />
      {selectOpen ? null : (
        <ApplyModalContent
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          originalPrice={originalPrice}
          price={price}
          setPrice={setPrice}
          onApply={onApply}
        />
      )}
    </BasicBottomModal>
  );
}
