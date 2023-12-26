import ApplicationContentItem from '@components/atoms/Item/ApplicationContentItem';
import { StyleSheet, View } from 'react-native';
import CompleteText from '@components/atoms/Text/CompleteText';
import Spacing from '@styles/spacing';
import DateText from '@components/atoms/Text/DateText';
import ApplicationTable from '@components/molecules/Text/ApplicationTable';
import { Badge } from 'react-native-paper';

type ApplicationItemProps = {
  id: number;
  imgUrl: string;
  title: string;
  subTitle: string;
  price: string;
  date: string;
};

// TODO Badge 색상 Colors.Primary로 변경해야 함
function ApplicationItem({ item }: { item: ApplicationItemProps }) {
  const today = new Date();
  const contentDate = new Date(
    Number(item.date.slice(6)),
    Number(item.date.slice(0, 2)) - 1,
    Number(item.date.slice(3, 5)),
  );
  const applicationEnd = contentDate < today;

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Badge size={7} visible={!applicationEnd} style={styles.badge} />
        <CompleteText message='Application' color='#46A6FB' />
        <DateText message='Application' date={item.date} />
      </View>
      <ApplicationContentItem
        key={item.id.toString() + item.title + item.subTitle}
        imgUrl={item.imgUrl}
        title={item.title}
        subTitle={item.subTitle}
        price={item.price}
        applicationEnd={applicationEnd}
        review
      />
      <ApplicationTable
        applicationEnd={applicationEnd}
        key={item.id.toString() + item.title + item.date}
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
  badge: {
    position: 'absolute',
    top: 0,
    left: -8,
  },
});

export default ApplicationItem;
