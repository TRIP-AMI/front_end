import { SafeAreaView, StyleSheet } from 'react-native';
import BasicTab from '@components/organisms/Section/BasicTab';
import TermsAndConditionsText from '@components/atoms/Text/TermsAndConditionsText';
import joinTerms from '@/constants/joinTerms';

function TermsAndConditionScreen() {
  const tabData = [
    {
      id: 1,
      tabName: 'Privacy\nPolicy',
      tabComponent: (
        <TermsAndConditionsText
          en={joinTerms[1].detail_en}
          ko={joinTerms[1].detail_ko}
        />
      ),
    },
    {
      id: 2,
      tabName: 'Terms of\nService',
      tabComponent: (
        <TermsAndConditionsText
          en={joinTerms[2].detail_en}
          ko={joinTerms[2].detail_ko}
        />
      ),
    },
    {
      id: 3,
      tabName: 'Age\nConsent',
      tabComponent: (
        <TermsAndConditionsText
          en={joinTerms[0].detail_en}
          ko={joinTerms[0].detail_ko}
        />
      ),
    },
    {
      id: 4,
      tabName: 'Marketing\nAgreements',
      tabComponent: (
        <TermsAndConditionsText
          en={joinTerms[3].detail_en}
          ko={joinTerms[3].detail_ko}
        />
      ),
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <BasicTab data={tabData} fullScreen sm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default TermsAndConditionScreen;
