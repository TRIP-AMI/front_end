import { View, Text, StyleSheet } from 'react-native';

import BasicFullScreenModal from '@components/atoms/Modal/BasicFullScreenModal';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import Spacing from '@/styles/spacing';
import useModalHook from '@/hooks/modalHook';
import PickerSelectModal from './PickerSelectModal';
import SelectButton from '@/components/atoms/Button/SelectButton';
import CalendarPicker from '@/components/molecules/Calendar/CalendarPicker';

const yList: { label: string; value: number }[] = [];
const mList: { label: string; value: number }[] = [];

const now = dayjs();
const m3Later = now.add(3, 'M');

console.log(now.get('y'), m3Later.get('y'));

yList.push({
  label: `${now.get('y')}`,
  value: now.get('y'),
});
if (now.get('y') < m3Later.get('y')) {
  yList.push({
    label: `${m3Later.get('y')}`,
    value: m3Later.get('y'),
  });
}

// eslint-disable-next-line no-plusplus
for (let i = 0; i < 3; i++) {
  const tempDate = now.add(i, 'M');
  mList.push({
    label: `${tempDate.get('M') + 1}`,
    value: tempDate.get('M') + 1,
  });
}

export default function CalendarModal() {
  const [dateY, setDateY] = useState<number>(0);
  const [dateM, setDateM] = useState<number>(0);

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

  useEffect(() => {
    setDateY(now.get('y'));
    setDateM(now.get('M') + 1);
  }, []);

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
        <CalendarPicker Y={dateY} M={dateM} />
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
