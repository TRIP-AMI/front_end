import { Dispatch, SetStateAction } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/styles/colors';

export default function SelectedOptionCard({
  selectedItem,
  setSelectedItem,
}: {
  selectedItem: string;
  setSelectedItem: Dispatch<SetStateAction<string>>;
}) {
  const onClose = () => {
    setSelectedItem('');
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.text}>{selectedItem}</Text>
      <Pressable onPress={onClose}>
        <Ionicons name='close-outline' size={20} color={Colors.fontGray05} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#F2F2F2',
    width: '100%',
    padding: 15,
    marginTop: 10,
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    lineHeight: 17,
    color: Colors.fontGray02,
  },
});
