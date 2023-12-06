import { View, StyleSheet } from 'react-native';
import AmiScore from '@components/atoms/Text/AmiScore';
import colors from '@styles/colors';
import Spacing from '@styles/spacing';
import VerticalLine from '@components/atoms/etc/VerticalLine';

type AmiScoreTableProps = {
  scores: {
    title: string;
    data: {
      id: number;
      score: number;
      title: string;
    }[];
  };
};

function AmiScoreTable({ scores }: AmiScoreTableProps) {
  return (
    <View style={styles.container}>
      <AmiScore score={scores.data[0].score} title={scores.data[0].title} />
      <VerticalLine />
      <AmiScore score={scores.data[1].score} title={scores.data[1].title} />
      <VerticalLine />
      <AmiScore score={scores.data[2].score} title={scores.data[2].title} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 72,
    borderRadius: 5,
    borderColor: colors.lineGray,
    borderWidth: 1,
    marginHorizontal: Spacing.IOS392Margin,
    marginBottom: 20,
  },
});

export default AmiScoreTable;
