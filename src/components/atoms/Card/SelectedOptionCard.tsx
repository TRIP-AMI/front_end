import { Dispatch, SetStateAction } from 'react';
import { View, StyleSheet, Text, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/styles/colors';

export default function SelectedOptionCard({
  selectedItem,
  setSelectedItem,
  price,
}: {
  selectedItem: string;
  setSelectedItem: Dispatch<SetStateAction<string>>;
  price: number;
}) {
  const onClose = () => {
    setSelectedItem('');
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.header}>
        <Text style={styles.text}>{selectedItem}</Text>
        <Pressable onPress={onClose}>
          <Ionicons name='close-outline' size={20} color={Colors.fontGray05} />
        </Pressable>
      </View>
      <View style={styles.content}>
        <View style={{ flex: 1, alignItems: 'flex-end' }}>
          <Text style={styles.text}>
            {price > 0 ? `${price.toLocaleString()} won` : 'Free'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#F2F2F2',
    width: '100%',
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginTop: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 12,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    lineHeight: 17,
    color: Colors.fontGray02,
    paddingTop: 5,
  },
});
