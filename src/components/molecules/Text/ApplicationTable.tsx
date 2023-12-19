import { StyleSheet, View } from 'react-native';
import AmiScore from '@components/atoms/Text/AmiScore';
import VerticalLine from '@components/atoms/etc/VerticalLine';
import Colors from '@styles/colors';
import useModalHook from '@hooks/modalHook';

function ApplicationTable() {
  const { setModalName } = useModalHook();

  const tableData = [
    {
      id: 1,
      title: 'Cancellation',
      onPress: () => setModalName('APPLICATION_CANCEL'),
    },
    {
      id: 2,
      title: 'Mail to Applicant',
      onPress: () => console.log('Mail to Applicant'),
    },
    { id: 3, title: 'Details', onPress: () => console.log('Details') },
  ];
  return (
    <View style={styles.container}>
      {tableData.map((item, index) => (
        <>
          <AmiScore
            key={item.id}
            title={item.title}
            onPress={item.onPress}
            style={styles.text}
          />
          {index !== tableData.length - 1 && <VerticalLine />}
        </>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 43,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    borderColor: Colors.lineGray04,
    borderWidth: 1,
    marginTop: 15,
  },
  text: {
    color: Colors.fontGray03,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.24,
    lineHeight: 42,
  },
});

export default ApplicationTable;
