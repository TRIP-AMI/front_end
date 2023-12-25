import { Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import BasicModal from '@/components/atoms/Modal/BasicModal';
import Colors from '@/styles/colors';
import useModalHook from '@/hooks/modalHook';
import { RootStackNavigationProp } from '@/types/NavigationTypes';
import SURVEY_DATA from '@/constants/survey';

export default function SurveyModal() {
  const { navigate } = useNavigation<RootStackNavigationProp>();
  const { resetModal } = useModalHook();

  const onCheck = () => {
    resetModal();
    navigate('Survey', { surveyId: 1, surveyData: SURVEY_DATA.get(1)! });
  };

  return (
    <BasicModal onCheck={onCheck} buttonText='To do a Survey'>
      <Text style={styles.text}>
        {`Hello!\nWere you satisfied with\nthe TRIPAMI service?\n\nYour satisfaction survey\nhelps us to improve TRIPAMI.\nPlease take your time to participate.`}
      </Text>
    </BasicModal>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat-Medium',
    color: Colors.fontGray03,
    fontSize: 16,
    lineHeight: 22,
    letterSpacing: -0.32,
    textAlign: 'center',
  },
});
