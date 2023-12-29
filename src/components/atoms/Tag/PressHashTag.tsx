import {
  Pressable,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';

function PressHashTag({
  label,
  style,
}: {
  label: string;
  style?: StyleProp<ViewStyle>;
}) {
  const onPressTag = () => {};
  return (
    <Pressable onPress={onPressTag} style={[styles.tag, style]}>
      <Text style={{ color: '#161616' }}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  tag: {
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 18,
  },
});

export default PressHashTag;
