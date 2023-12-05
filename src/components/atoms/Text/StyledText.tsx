import { Text, ColorValue } from 'react-native';

export default function StyledText({
  content,
  color,
  size,
  font,
}: {
  content: string;
  color: ColorValue;
  size: number;
  font: string;
}) {
  return (
    <Text style={{ color, fontSize: size, fontFamily: font }}>{content}</Text>
  );
}
