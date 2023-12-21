import {
  Pressable,
  Text,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import Colors from '@/styles/colors';

function PressHashTag({
  label,
  style,
  active,
  onPress,
}: {
  label: string;
  style?: StyleProp<ViewStyle>;
  active?: boolean;
  onPress?: () => void;
}) {
  const onPressTag = () => {
    if (onPress) {
      onPress();
    }
  };
  return (
    <Pressable
      onPress={onPressTag}
      style={[styles.tag, active ? styles.activeStyle : undefined, style]}
    >
      <Text style={{ color: active ? Colors.primary : '#161616' }}>
        {label}
      </Text>
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
  activeStyle: {
    borderColor: Colors.primary,
  },
});

export default PressHashTag;
