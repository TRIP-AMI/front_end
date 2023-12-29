import { Modal, Pressable, View, StyleSheet } from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { AntDesign } from '@expo/vector-icons';
import Dim from '@/components/atoms/Dim/Dim';

export default function TimePickerModal({
  isVisible,
  onClose,
  date,
  setDate,
}: {
  isVisible: boolean;
  onClose: () => void;
  date: Date;
  setDate: (value: Date) => void;
}) {
  const onChange = (
    _event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) => {
    if (selectedDate) {
      setDate(selectedDate);
    }
  };

  return (
    <Modal
      visible={isVisible}
      animationType='fade'
      transparent
      style={styles.container}
    >
      <Pressable onPress={onClose} style={styles.dimWrap}>
        <Dim />
      </Pressable>
      <View style={styles.contentWrap}>
        <View style={styles.contentHeader}>
          <Pressable
            onPress={onClose}
            style={{ marginTop: 20, marginRight: 22 }}
          >
            <AntDesign name='arrowright' size={24} color='black' />
          </Pressable>
        </View>
        <DateTimePicker
          display='spinner'
          testID='dateTimePicker'
          value={date}
          mode='time'
          onChange={onChange}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: { position: 'relative', flex: 1 },
  dimWrap: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  contentWrap: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    paddingBottom: 40,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: '#fff',
  },
  contentHeader: {
    flexDirection: 'row-reverse',
    width: '100%',
  },
});
