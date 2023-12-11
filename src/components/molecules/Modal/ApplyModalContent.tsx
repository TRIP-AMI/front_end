import { StyleSheet, View } from 'react-native';
import { Dispatch, SetStateAction } from 'react';
import SelectedOptionCard from '@/components/atoms/Card/SelectedOptionCard';
import ApplyModalButton from '@/components/molecules/Modal/ApplyModalButton';

export default function ApplyModalContent({
  selectedDate,
  setSelectedDate,
  price,
}: {
  selectedDate: string;
  setSelectedDate: Dispatch<SetStateAction<string>>;
  price: number;
}) {
  return (
    <>
      <View style={styles.container}>
        {selectedDate && (
          <SelectedOptionCard
            selectedItem={selectedDate}
            setSelectedItem={setSelectedDate}
            price={price}
          />
        )}
      </View>
      <ApplyModalButton price={price} selectedDate={selectedDate} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2.5,
    width: '100%',
    alignItems: 'center',
  },
});
