import { View, Text, StyleSheet } from 'react-native';
import StyledButton from '@/components/atoms/Buttons/StyledButton';
import Colors from '@/styles/colors';

export default function ApplyModalButton({
  price,
  onApply,
}: {
  price: number;
  onApply: () => void;
}) {
  return (
    <View style={styles.container}>
      <View style={styles.priceTag}>
        <View style={styles.price}>
          <Text style={styles.text}>{price.toLocaleString()}</Text>
        </View>
        <View style={styles.unit}>
          <Text style={styles.text}>{' won'}</Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
        <StyledButton content='Apply' onPress={onApply} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1.5,
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderTopColor: Colors.lineGray01,
    borderTopWidth: 1,
  },
  priceTag: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    flex: 4,
    alignItems: 'flex-end',
  },
  unit: {
    flex: 1,
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    color: Colors.main,
  },
});
