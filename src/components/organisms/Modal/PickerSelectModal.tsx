import { View, StyleSheet, Pressable } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRecoilState, useRecoilValue } from 'recoil';
import { AntDesign } from '@expo/vector-icons';
import BasicBottomModal from '@/components/atoms/Modal/BasicBottomModal';
import pickerSelectValue, { pickerList } from '@/utils/recoil/picker';
import useModalHook from '@/hooks/modalHook';

export default function PickerSelectModal() {
  const [selectedValue, setSelectedValue] = useRecoilState(pickerSelectValue);
  const selectList = useRecoilValue(pickerList);
  const { resetModal } = useModalHook();
  return (
    <BasicBottomModal
      onDismiss={() => {}}
      header={
        <View
          style={{
            flexDirection: 'row-reverse',
            width: '100%',
          }}
        >
          <Pressable
            onPress={resetModal}
            style={{ marginTop: 10, marginRight: 27 }}
          >
            <AntDesign name='arrowright' size={24} color='black' />
          </Pressable>
        </View>
      }
    >
      <View style={styles.contentWrap}>
        {/* picker */}
        <Picker
          mode='dropdown'
          selectedValue={selectedValue}
          onValueChange={(itemValue) => setSelectedValue(itemValue)}
        >
          {selectList.map((item) => (
            <Picker.Item
              key={item.value}
              label={item.label}
              value={item.value}
            />
          ))}
        </Picker>
      </View>
    </BasicBottomModal>
  );
}

const styles = StyleSheet.create({
  contentWrap: {
    width: '100%',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#fff',
  },
});
