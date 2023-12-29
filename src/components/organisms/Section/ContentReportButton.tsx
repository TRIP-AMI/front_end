import { View, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import TextButton from '@/components/atoms/Button/TextButton';
import { RootStackNavigationProp } from '@/types/NavigationTypes';
import Spacing from '@/styles/spacing';
import Colors from '@/styles/colors';

export default function ContentReportButton() {
  const { navigate } = useNavigation<RootStackNavigationProp>();

  return (
    <View style={styles.container}>
      <TextButton
        title='Report'
        onPress={() => navigate('Report')}
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
