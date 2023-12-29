import { Dimensions, FlatList, StyleSheet, Text, View } from 'react-native';
import ApplicationTable from '@components/molecules/Text/ApplicationTable';
import AmiImg from '@components/atoms/Image/AmiImg';
import DateText from '@components/atoms/Text/DateText';
import Colors from '@styles/colors';

type ApplicantListProps = {
  id: number;
  name: string;
  imgUrl: string;
};

function ApplicantList({
  tourist,
  date,
  applicationEnd,
}: {
  tourist: ApplicantListProps[];
  date: string;
  applicationEnd: boolean;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Applicant List</Text>
      <FlatList
        data={tourist}
        renderItem={({ item }) => (
          <View>
            <View style={styles.textContainer}>
              <View style={styles.infoContainer}>
                <AmiImg imgUrl={item.imgUrl} style={styles.img} />
                <Text style={styles.name}>{item.name}</Text>
              </View>
              <DateText message='Application date' date={date} />
            </View>
            <ApplicationTable applicationEnd={applicationEnd} noBroder />
          </View>
        )}
        scrollEnabled={false}
      />
    </View>
  );
}

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    color: Colors.fontGray03,
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: -0.28,
    lineHeight: 18,
  },
  title: {
    color: '#000000',
    fontSize: 14,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: -0.28,
    lineHeight: 20,
    marginBottom: 15,
  },
  img: {
    width: screenHeight * 0.038,
    height: screenHeight * 0.038,
    marginRight: 5,
    marginBottom: 0,
  },
});

export default ApplicantList;
