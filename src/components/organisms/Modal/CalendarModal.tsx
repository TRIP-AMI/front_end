import { View, Text, StyleSheet } from 'react-native';

import BasicFullScreenModal from '@components/atoms/Modal/BasicFullScreenModal';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Spacing from '@/styles/spacing';
import useModalHook from '@/hooks/modalHook';
import PickerSelectModal from './PickerSelectModal';
import SelectButton from '@/components/atoms/Button/SelectButton';
import CalendarPicker from '@/components/molecules/Calendar/CalendarPicker';

const yList = [
  {
    label: '2023',
    value: '2023',
  },
  {
    label: '2024',
    value: '2024',
  },
];
const mList = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
];

export default function CalendarModal() {
  const [dateY, setDateY] = useState('2023');
  const [dateM, setDateM] = useState('12');

  const {
    isVisible: yVisible,
    onOpen: yOpen,
    onClose: yClose,
  } = useModalHook();
  const {
    isVisible: mVisible,
    onOpen: mOpen,
    onClose: mClose,
  } = useModalHook();

  return (
    <BasicFullScreenModal modalTitle='Available Dates'>
      <StatusBar style='auto' />
      <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
        {/* text */}
        <Text style={styles.infoText}>You can choose up to five dates.</Text>

        {/* select box */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <SelectButton title={dateY} onPress={yOpen} />
          <SelectButton title={dateM} onPress={mOpen} />
        </View>
        {/* calendar */}
        <CalendarPicker />
      </View>

      {/* modal */}
      <PickerSelectModal
        isVisible={yVisible}
        onClose={yClose}
        selectList={yList}
        selectedValue={dateY}
        setSelectedValue={setDateY}
      />
      <PickerSelectModal
        isVisible={mVisible}
        onClose={mClose}
        selectList={mList}
        selectedValue={dateM}
        setSelectedValue={setDateM}
      />
    </BasicFullScreenModal>
  );
}

const styles = StyleSheet.create({
  infoText: {
    marginVertical: 30,
    color: '#8E8E8E',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    lineHeight: 22,
  },
  selectBoxWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '48.5%',
    padding: 14,
    borderWidth: 1,
    borderColor: '#ECECEC',
    borderRadius: 5,
  },
});
