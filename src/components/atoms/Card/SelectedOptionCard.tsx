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
          <Ionicons name='close-outline' size={20} color={Colors.contentLine} />
        </Pressable>
      </View>
      <View style={styles.content}>
        <View style={{ flex: 2, alignItems: 'flex-end' }}>
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
    width: '88%',
    height: 80,
    paddingHorizontal: 15,
    paddingVertical: 14,
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    lineHeight: 17,
    color: Colors.fontGray01,
  },
});
