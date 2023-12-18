import ApplicationContentItem from '@components/atoms/Item/ApplicationContentItem';
import { StyleSheet, View } from 'react-native';
import ApplicationCompleteText from '@components/atoms/Text/ApplicationCompleteText';
import Spacing from '@styles/spacing';

type ApplicationItemProps = {
  imgUrl: string;
  title: string;
  subTitle: string;
  price: string;
};

function ApplicationItem({ item }: { item: ApplicationItemProps }) {
  return (
    <View style={styles.container}>
      <ApplicationCompleteText />
      <ApplicationContentItem
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
});

export default ApplicationItem;
