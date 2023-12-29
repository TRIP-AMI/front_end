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
      <Text
        style={[
          styles.textSytle,
          { color: active ? Colors.primary : '#161616' },
        ]}
      >
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
  textSytle: {
    color: '#161616',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: -0.24,
  },
  activeStyle: {
    borderColor: Colors.primary,
  },
});

export default PressHashTag;
