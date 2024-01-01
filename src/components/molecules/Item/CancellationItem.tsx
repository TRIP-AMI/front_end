import ApplicationContentItem from '@components/atoms/Item/ApplicationContentItem';
import { StyleSheet, View } from 'react-native';
import CompleteText from '@components/atoms/Text/CompleteText';
import Spacing from '@styles/spacing';
import DateText from '@components/atoms/Text/DateText';

type CancellationItemProps = {
  id: number;
  imgUrl: string;
  title: string;
  subTitle: string;
  price: string;
  date: string;
};

function CancellationItem({ item }: { item: CancellationItemProps }) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <CompleteText message='Cancellation' color='#FB4646' />
        <DateText message='Cancellation' date={item.date} />
      </View>
      <ApplicationContentItem
        key={item.id.toString() + item.title + item.subTitle}
        id={item.id}
        imgUrl={item.imgUrl}
        title={item.title}
        subTitle={item.subTitle}
        price={item.price}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.IOS392Margin,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
});

export default CancellationItem;
