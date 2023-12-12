import { View, Text, StyleSheet, Pressable } from 'react-native';

import BasicFullScreenModal from '@components/atoms/Modal/BasicFullScreenModal';
import { StatusBar } from 'expo-status-bar';
import { Feather } from '@expo/vector-icons';
import { useState } from 'react';
import Spacing from '@/styles/spacing';
import useModalHook from '@/hooks/modalHook';
import PickerSelectModal from './PickerSelectModal';

export default function CalendarModal() {
  const [dateY, setDateY] = useState('2023');
  const [dateM] = useState('5');

  const { isVisible, onOpen } = useModalHook();
  const handlePress = () => {
    onOpen();
  };

  console.log(isVisible);

  return (
    <BasicFullScreenModal modalTitle='Available Dates'>
      <StatusBar style='auto' />
      <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
        {/* text */}
        <Text style={styles.infoText}>You can choose up to five dates.</Text>

        {/* select box */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Pressable style={styles.selectBoxWrap} onPress={handlePress}>
            <Text>{dateY}</Text>
            <Feather name='chevron-down' size={24} color='#A1A5AE' />
          </Pressable>
          <Pressable style={styles.selectBoxWrap}>
            <Text>{dateM}</Text>
            <Feather name='chevron-down' size={24} color='#A1A5AE' />
          </Pressable>
        </View>
        {/* calendar */}
      </View>

      {isVisible && (
        <PickerSelectModal selectedValue={dateY} setSelectedValue={setDateY} />
      )}
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
