import {
  View,
  StyleSheet,
  Dimensions,
  ViewStyle,
  StyleProp,
} from 'react-native';
import AmiScore from '@components/atoms/Text/AmiScore';
import Colors from '@styles/colors';
import VerticalLine from '@components/atoms/etc/VerticalLine';

type AmiScoreTableProps = {
  scores: {
    title: string;
    data: {
      id: number;
      key: string;
      score: number;
      title: string;
    }[];
  };
  style?: StyleProp<ViewStyle>;
};

function AmiScoreTable({ scores, style }: AmiScoreTableProps) {
  return (
    <View style={[styles.container, style]}>
      {scores.data.map((item, index) => (
        <>
          <AmiScore
            key={scores.title + item.id.toString()}
            keyName={item.key}
            score={item.score}
            title={item.title}
          />
          {index !== scores.data.length - 1 && <VerticalLine hei={22} />}
        </>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: Dimensions.get('window').height * 0.0845,
    borderRadius: 5,
    borderColor: Colors.lineGray04,
    borderWidth: 1,
  },
});

export default AmiScoreTable;
