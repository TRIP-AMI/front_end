import { useState } from 'react';
import { View } from 'react-native';
import BasicBottomModal from '@components/atoms/Modal/BasicBottomModal';
import SelectBox from '@/components/molecules/etc/SelectBox';
import {
  BasicModalHeader,
  ModalHeaderWithTitle,
} from '@/components/atoms/Modal/ModalHeader';
import ApplyModalContent from '@/components/molecules/Modal/ApplyModalContent';

// TODO: 상세 페이지에서 prop으로 받아오기 or 프로그램 id로 조회
const dates = [
  { id: 1, date: 'January 2, 2024', person: 1 },
  { id: 2, date: 'January 3, 2024', person: 2 },
  { id: 3, date: 'January 4, 2024', person: 0 },
  { id: 4, date: 'January 5, 2024', person: 4 },
  { id: 5, date: 'January 6, 2024', person: 5 },
];

export default function ApplyModal() {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectOpen, setSelectOpen] = useState(true);

  return (
    <BasicBottomModal
      onDismiss={() => {}}
      header={
        selectedDate && !selectOpen ? (
          <BasicModalHeader icon='chevron-down' />
        ) : (
          <ModalHeaderWithTitle icon='chevron-back' title='Select Options' />
        )
      }
    >
      <View style={{ paddingHorizontal: 24 }}>
        <SelectBox
          dates={dates}
          setSelectedDate={setSelectedDate}
          selectOpen={selectOpen}
          setSelectOpen={setSelectOpen}
        />
      </View>
      {selectedDate && !selectOpen ? (
        <ApplyModalContent
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      ) : null}
    </BasicBottomModal>
  );
}
