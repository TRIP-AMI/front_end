import { Dispatch, SetStateAction } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from '@components/atoms/IconButton/IconButton';
import StyledText from '@components/atoms/Text/StyledText';
import Colors from '@/styles/colors';
// import CountBox from '@/components/molecules/etc/CountBox';

export default function SelectedOptionCard({
  selectedItem,
  setSelectedItem,
  // originalPrice,
  price, // setPrice,
}: {
  selectedItem: string;
  setSelectedItem: Dispatch<SetStateAction<string>>;
  // originalPrice: number;
  price: number;
  // setPrice: Dispatch<SetStateAction<number>>;
}) {
  // const [count, setCount] = useState(1);

  // useEffect(() => {
  //   setPrice(150000 * count);
  // }, [count, setPrice]);

  const onClose = () => {
    setSelectedItem('');
    // setPrice(originalPrice); // 기본 가격으로 초기화
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.header}>
        <StyledText
          content={selectedItem}
          color='black'
          size={14}
          font='Montserrat-Medium'
        />
        <IconButton
          icon='close-outline'
          size={20}
          color={Colors.fontGray01}
          onPress={onClose}
        />
      </View>
      <View style={styles.content}>
        {/* <CountBox count={count} setCount={setCount} /> */}
        <View style={{ flex: 2, alignItems: 'flex-end' }}>
          <StyledText
            content={price > 0 ? `${price.toLocaleString()} won` : 'Free'}
            color='black'
            size={14}
            font='Montserrat-Medium'
          />
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
    height: '40%',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Montserrat-Medium',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '55%',
  },
});
