import ApplicationContentItem from '@components/atoms/Item/ApplicationContentItem';
import { StyleSheet, View } from 'react-native';
import ApplicationCompleteText from '@components/atoms/Text/ApplicationCompleteText';
import Spacing from '@styles/spacing';
import ApplicationDateText from '@components/atoms/Text/ApplicationDateText';
import ApplicationTable from '@components/molecules/Text/ApplicationTable';

type ApplicationItemProps = {
  imgUrl: string;
  title: string;
  subTitle: string;
  price: string;
  date: string;
};

function ApplicationItem({ item }: { item: ApplicationItemProps }) {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <ApplicationCompleteText />
        <ApplicationDateText date={item.date} />
      </View>
      <ApplicationContentItem
        imgUrl={item.imgUrl}
        title={item.title}
        subTitle={item.subTitle}
        price={item.price}
      />
      <ApplicationTable />
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
    marginBottom: 15,
  },
});

export default ApplicationItem;
