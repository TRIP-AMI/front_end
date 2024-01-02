import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextButton from '@/components/atoms/Button/TextButton';
import Spacing from '@/styles/spacing';
import Colors from '@/styles/colors';
import { ContentStackNavigationProp } from '@/navigations/Common/ContentStack';

export default function ContentReportButton({
  programId,
}: {
  programId: number;
}) {
  const { navigate } = useNavigation<ContentStackNavigationProp>();

  return (
    <View style={styles.container}>
      <TextButton
        title='Report'
        onPress={() => navigate('Report', { programId })}
        style={styles.text}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Spacing.IOS392Margin,
    paddingTop: 30,
    paddingBottom: 60,
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.28,
    color: Colors.fontGray05,
    textDecorationLine: 'underline',
  },
});
