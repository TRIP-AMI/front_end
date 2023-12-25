import { Text, StyleSheet, Pressable } from 'react-native';
import CheckCircle from '@/components/atoms/Button/CheckCircle';

type SurveyChoiceProps = {
  choice: string;
  isChecked: boolean;
  onPress: () => void;
};

export default function SurveyChoice({
  choice,
  isChecked,
  onPress,
}: SurveyChoiceProps) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
    >
      <CheckCircle isChecked={isChecked} />
      <Text style={styles.text}>{choice}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 15,
    backgroundColor: '#FFF3F2',
    borderRadius: 5,
  },
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.28,
    color: '#474747',
    paddingHorizontal: 10,
  },
  pressed: {
    opacity: 0.5,
  },
});
