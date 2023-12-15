import { Pressable, Text } from 'react-native';

type TextButtonProps = {
  title: string;
  onPress: () => void;
  style?: object;
};

export default function TextButton({ title, onPress, style }: TextButtonProps) {
  return (
    <Pressable
      style={({ pressed }) => pressed && { opacity: 0.5 }}
      onPress={onPress}
    >
      <Text style={style}>{title}</Text>
    </Pressable>
  );
}
