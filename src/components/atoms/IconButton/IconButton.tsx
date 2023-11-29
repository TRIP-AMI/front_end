import { Pressable, View, StyleSheet } from 'react-native';
import { Ionicons, SimpleLineIcons } from '@expo/vector-icons';

// TODO: 린트 오류 해결필요
type IconButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  // eslint-disable-next-line react/require-default-props
  size?: number;
  // eslint-disable-next-line react/require-default-props
  color?: string;
  onPress: () => void;
};

export function IconButton({ icon, size, color, onPress }: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <Ionicons name={icon} color={color} size={size} />
      </View>
    </Pressable>
  );
}

type SimpleLineIconButtonProps = {
  icon: keyof typeof SimpleLineIcons.glyphMap;
  // eslint-disable-next-line react/require-default-props
  size?: number;
  // eslint-disable-next-line react/require-default-props
  color?: string;
  onPress: () => void;
};

export function SimpleLineIconButton({
  icon,
  size,
  color,
  onPress,
}: SimpleLineIconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={styles.buttonContainer}>
        <SimpleLineIcons name={icon} color={color} size={size} />
      </View>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  buttonContainer: {
    padding: 4,
  },
  pressed: {
    opacity: 0.5,
  },
});
