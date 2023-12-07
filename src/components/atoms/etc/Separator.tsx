import { View } from 'react-native';

function Separator({
  color,
  hei,
  marginVer,
}: {
  color: string;
  hei: number;
  marginVer: number;
}) {
  return (
    <View
      style={{
        backgroundColor: color,
        height: hei,
        marginVertical: marginVer,
      }}
    />
  );
}

export default Separator;
