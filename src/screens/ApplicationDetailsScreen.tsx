import { SafeAreaView, StyleSheet } from 'react-native';
import BasicTab from '@components/organisms/Section/BasicTab';
import ApplicationItemList from '@components/organisms/Section/ApplicationItemList';
import CancellationItemList from '@components/organisms/Section/CancellationItemList';
import { useRecoilValue } from 'recoil';
import profileType from '@utils/recoil/profile';
import ApplicationItemListForAmi from '@components/organisms/Section/ApplicationItemListForAmi';

function ApplicationDetailsScreen() {
  const profile = useRecoilValue(profileType);
  const tabData = [
    {
      id: 1,
      tabName: 'Application',
      tabComponent:
        profile === 'AMI' ? (
          <ApplicationItemListForAmi />
        ) : (
          <ApplicationItemList />
        ),
    },
    {
      id: 2,
      tabName: 'Cancellation',
      tabComponent: <CancellationItemList />,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <BasicTab data={tabData} fullScreen={profile === 'AMI'} />
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
