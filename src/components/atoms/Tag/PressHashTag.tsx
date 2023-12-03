import { Pressable, Text, StyleSheet } from 'react-native';

function PressHashTag({ label }: { label: string }) {
  const onPressTag = () => {};
  return (
    <Pressable onPress={onPressTag} style={style.tag}>
      <Text style={{ color: '#161616' }}>{label}</Text>
    </Pressable>
  );
}

const style = StyleSheet.create({
  tag: {
    marginRight: 5,
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 18,
  },
});

export default PressHashTag;
