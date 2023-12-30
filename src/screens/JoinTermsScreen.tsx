import { Text, StyleSheet, ScrollView } from 'react-native';
import { JoinTermsProps } from '@/types/NavigationTypes';
import Separator from '@/components/atoms/etc/Separator';
import Colors from '@/styles/colors';

export default function JoinTermsScreen({
  route,
}: {
  route: { params: JoinTermsProps };
}) {
  const { en, ko } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.text}>{en}</Text>
      <Separator color={Colors.lineGray05} hei={8} marginVer={0} />
      <Text style={styles.text}>{ko}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    paddingVertical: 20,
    paddingHorizontal: 24,
    fontSize: 14,
    lineHeight: 20,
    color: Colors.fontGray03,
    fontFamily: 'Pretendard-Regular',
  },
});
