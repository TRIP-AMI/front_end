import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/styles/colors';
import NextButton from '@/components/atoms/Button/NextButton';
import { RootStackNavigationProp, SurveyProps } from '@/types/NavigationTypes';
import FooterButton from '@/components/molecules/Button/FooterButton';
import { SurveyChoiceType, SurveyId } from '@/types/surveyData';
import SURVEY_DATA from '@/constants/survey';
import SurveyChoice from '@/components/molecules/Toggle/SurveyChoice';
import showToast from '@/utils/toast/toast';

export default function SurveyScreen({
  route,
  navigation,
}: {
  route: { params: SurveyProps };
  navigation: RootStackNavigationProp;
}) {
  const { surveyId, surveyData } = route.params;
  const { navigate } = navigation;
  const nextSurveyData =
    surveyId < 6 ? SURVEY_DATA.get((surveyId + 1) as SurveyId) : undefined;
  // 타입 number, string, SurveyChoiceType 중 고민
  const [checkedIds, setCheckedIds] = useState<number[]>([]);
  // reoil로 응답 결과 저장하기
  // const setSurveyResult = useSetRecoilState(surveyResultState);

  const onMultiplePress = (choice: SurveyChoiceType) => {
    if (checkedIds.includes(choice.id)) {
      setCheckedIds(checkedIds.filter((checkedId) => checkedId !== choice.id));
    } else {
      setCheckedIds([...checkedIds, choice.id]);
    }
  };

  const onSinglePress = (choice: SurveyChoiceType) => {
    if (checkedIds[0] === choice.id) return;
    setCheckedIds([choice.id]);
  };

  const onChoicePress = (choice: SurveyChoiceType) => {
    if (surveyData.type === 'SINGLE') {
      onSinglePress(choice);
    } else {
      onMultiplePress(choice);
    }
  };

  const onNextPress = () => {
    if (surveyData.type === 'SINGLE' || surveyData.type === 'MULTIPLE') {
      if (checkedIds.length === 0) {
        showToast('Please select at least one option');
        return;
      }
    }
    // setSurveyResult(someData);
    navigate('Survey', {
      surveyId: nextSurveyData!.id,
      surveyData: nextSurveyData!,
    });
  };

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
        <View style={{ paddingVertical: 15 }}>
          <Text style={styles.question}>{surveyData.question}</Text>
          <Text style={styles.description}>{surveyData.description}</Text>
        </View>
        {/* SINGLE or MULTIPLE */}
        <View style={styles.choices}>
          {surveyData.choices.map((choice) => (
            <View key={choice.id} style={styles.choice}>
              <SurveyChoice
                choice={choice.content}
                isChecked={checkedIds.includes(choice.id)}
                onPress={() => onChoicePress(choice)}
              />
            </View>
          ))}
        </View>
      </View>
      {surveyId < 6 ? (
        <NextButton onPress={onNextPress} />
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
    paddingVertical: 45,
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
  question: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    lineHeight: 24,
    letterSpacing: -0.36,
    color: 'black',
    textAlign: 'center',
    paddingVertical: 5,
  },
  description: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.28,
    color: Colors.fontGray05,
    textAlign: 'center',
    paddingHorizontal: '10%',
  },
  choices: {
    // paddingTop: 30,
  },
  choice: {
    paddingBottom: 5,
  },
});
