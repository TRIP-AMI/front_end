import { useEffect, useState } from 'react';
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

export default function ApplyModal() {
  const price = 100; // TODO: 상세 페이지에서 prop으로 받아오기
  const [selectedDate, setSelectedDate] = useState('');
  const [selectOpen, setSelectOpen] = useState(true);

  useEffect(() => {
    if (!selectedDate) setSelectOpen(true);
  }, [selectedDate]);

  return (
    <BasicBottomModal
      onDismiss={() => {}}
      header={
        selectOpen ? (
          <ModalHeaderWithTitle
            icon='chevron-back'
            title='Select Options'
            onClose={() => setSelectOpen(false)}
          />
        ) : (
          <BasicModalHeader icon='chevron-down' />
        )
      }
    >
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
          price={price}
        />
      )}
    </BasicBottomModal>
  );
}
