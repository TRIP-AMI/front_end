import { View } from 'react-native';
import colors from '@styles/colors';

function Separator({ hei, marginVer }: { hei: number; marginVer: number }) {
  return (
    <View
      style={{
        backgroundColor: colors.blank,
        height: hei,
        marginVertical: marginVer,
      }}
    />
  );
}

export default Separator;
