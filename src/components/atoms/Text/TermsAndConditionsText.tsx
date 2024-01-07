import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Spacing from '@styles/spacing';
import Colors from '@styles/colors';
import Separator from '@components/atoms/etc/Separator';

function TermsAndConditionsText({ en, ko }: { en: string; ko: string }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={styles.text}>{en}</Text>
      <Separator color={Colors.lineGray05} hei={8} marginVer={20} />
      <Text style={styles.text}>{ko}</Text>
      <View style={{ height: 20 }} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: Spacing.IOS392Margin,
  },
  text: {
    color: Colors.fontGray03,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 20,
    paddingHorizontal: Spacing.IOS392Margin,
  },
});

export default TermsAndConditionsText;
