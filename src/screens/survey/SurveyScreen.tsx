import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/styles/colors';
import NextButton from '@/components/atoms/Button/NextButton';
import { RootStackNavigationProp, SurveyProps } from '@/types/NavigationTypes';
import FooterButton from '@/components/molecules/Button/FooterButton';
import { SurveyId } from '@/types/surveyData';
import surveyData from '@/constants/survey';

export default function SurveyScreen({
  route,
  navigation,
}: {
  route: { params: SurveyProps };
  navigation: RootStackNavigationProp;
}) {
  const { surveyId } = route.params;
  const { navigate } = navigation;
  const nextSurveyData =
    surveyId < 6 ? surveyData.get((surveyId + 1) as SurveyId) : undefined;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Customer Survey</Text>
        <Text style={styles.detail}>
          {`Your response will be\nused to improve TRIPAMI.`}
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.progress}>
          <Text style={styles.text}>
            <Text
              style={{
                fontFamily: 'Montserrat-SemiBold',
                color: Colors.primary,
              }}
            >
              Q
            </Text>
            {` ${surveyId}/6`}
          </Text>
        </View>
      </View>
      {surveyId < 6 ? (
        <NextButton
          onPress={() =>
            navigate('Survey', {
              surveyId: nextSurveyData!.id,
              surveyData: nextSurveyData!,
            })
          }
        />
      ) : (
        <FooterButton content='Submit' onPress={() => {}} disabled={false} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: '#EEF8FE',
    paddingHorizontal: 60,
    paddingVertical: 25,
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 19,
    color: Colors.fontGray01,
  },
  detail: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    lineHeight: 18,
    color: Colors.fontGray04,
  },
  body: {
    flex: 10,
    backgroundColor: 'white',
    height: '83%',
    paddingHorizontal: 61,
    paddingVertical: 20,
  },
  progress: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.28,
    color: Colors.fontGray05,
  },
});
