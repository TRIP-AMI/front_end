import { SafeAreaView, StyleSheet } from 'react-native';
import BasicTab from '@components/organisms/Section/BasicTab';
import ApplicationItemList from '@components/organisms/Section/ApplicationItemList';
import CancellationItemList from '@components/organisms/Section/CancellationItemList';

function ApplicationDetailsScreen() {
  const tabData = [
    {
      id: 1,
      tabName: 'Application',
      tabComponent: <ApplicationItemList />,
    },
    {
      id: 2,
      tabName: 'Cancellation',
      tabComponent: <CancellationItemList />,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <BasicTab data={tabData} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default ApplicationDetailsScreen;
