import { useSetRecoilState } from 'recoil';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/styles/colors';
import BasicButton from '@/components/atoms/Button/BasicButton';
import modalState from '@/utils/recoil/modal';

export default function ApplyModalButton({
  price,
  selectedDate,
}: {
  price: number;
  selectedDate: string;
}) {
  const setModal = useSetRecoilState(modalState);
  // TODO: Apply 버튼 누르면 확인 모달 띄우기
  const onApply = () => {
    console.log(`Apply on ${selectedDate}`);
    setModal(null);
  };

  return (
    <View style={styles.container}>
      <View style={styles.priceTag}>
        <View style={styles.price}>
          {price > 0 && (
            <Text style={styles.text}>{price.toLocaleString()}</Text>
          )}
        </View>
        <View style={styles.unit}>
          <Text style={styles.text}>{price > 0 ? ' won' : 'Free'}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        {selectedDate ? (
          <BasicButton content='Apply' round onPress={onApply} />
        ) : (
          <BasicButton content='Apply' round disabled onPress={() => {}} />
        )}
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
    borderTopColor: Colors.lineGray,
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
    lineHeight: 17,
    color: Colors.primary,
  },
  buttonContainer: {
    width: '88%',
    height: 50,
  },
});
