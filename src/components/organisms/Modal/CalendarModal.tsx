import BasicFullScreenModal from '@components/atoms/Modal/BasicFullScreenModal';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';
import Spacing from '@/styles/spacing';

export default function CalendarModal() {
  const handlePress = () => {};
  return (
    <BasicFullScreenModal modalTitle='Available Dates'>
      <StatusBar style='auto' />
      <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
        {/* text */}
        <Text style={styles.infoText}>You can choose up to five dates.</Text>

        {/* select box */}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Pressable style={styles.selectBoxWrap} onPress={handlePress}>
            <Text>2023</Text>
            <Feather name='chevron-down' size={24} color='#A1A5AE' />
          </Pressable>
          <Pressable style={styles.selectBoxWrap}>
            <Text>5</Text>
            <Feather name='chevron-down' size={24} color='#A1A5AE' />
          </Pressable>
        </View>
        {/* calendar */}
      </View>
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
