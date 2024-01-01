import ApplicationContentItem from '@components/atoms/Item/ApplicationContentItem';
import { StyleSheet, Text, View } from 'react-native';
import { Badge } from 'react-native-paper';
import Colors from '@styles/colors';
import ApplicantList from '@components/organisms/Section/ApplicantList';

type ApplicationItemProps = {
  id: number;
  imgUrl: string;
  title: string;
  subTitle: string;
  price: string;
  date: string;
  tourist: {
    id: number;
    name: string;
    imgUrl: string;
  }[];
};

// TODO Badge 색상 Colors.Primary로 변경해야 함
function ApplicationItemForAmi({
  item,
  category,
}: {
  item: ApplicationItemProps;
  category: string;
}) {
  const today = new Date();
  const contentDate = new Date(
    Number(item.date.slice(6)),
    Number(item.date.slice(0, 2)) - 1,
    Number(item.date.slice(3, 5)),
  );
  const isApplicationEnd = contentDate < today;
  const isVisible = (cate: string, applicationEnd: boolean) => {
    return !(
      (cate === 'Only New' && applicationEnd) ||
      (cate === 'Only Last' && !applicationEnd)
    );
  };

  return (
    <View>
      {isVisible(category, isApplicationEnd) ? (
        <View
          style={{
            backgroundColor: isApplicationEnd
              ? Colors.fontGray08
              : Colors.second,
            borderRadius: 5,
            marginBottom: 20,
          }}
        >
          <View style={styles.container}>
            <View style={styles.subContainer}>
              {!isApplicationEnd ? (
                <Text style={[styles.title, { color: '#46A6FB' }]}>
                  Last Application
                </Text>
              ) : (
                <Text style={styles.title}>New Application</Text>
              )}
              <Badge
                size={7}
                visible={!isApplicationEnd}
                style={styles.badge}
              />
            </View>
            <ApplicationContentItem
              key={item.id.toString() + item.title + item.subTitle}
              id={item.id}
              imgUrl={item.imgUrl}
              title={item.title}
              subTitle={item.subTitle}
              price={item.price}
            />
            <ApplicantList
              tourist={item.tourist}
              date={item.date}
              applicationEnd={isApplicationEnd}
            />
          </View>
        </View>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  subContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    paddingTop: 12,
  },
  badge: {
    position: 'absolute',
    top: 12,
    left: 117,
  },
  title: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: -0.28,
    lineHeight: 20,
  },
});

export default ApplicationItemForAmi;
