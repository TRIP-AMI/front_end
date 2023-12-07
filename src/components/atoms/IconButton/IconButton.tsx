import { Pressable, View, StyleSheet } from 'react-native';
import { Ionicons, SimpleLineIcons, Feather } from '@expo/vector-icons';

type IconButtonProps = {
  icon: keyof typeof Ionicons.glyphMap;
  size: number;
  color: string;
  onPress: () => void;
};

export function IconButton({ icon, size, color, onPress }: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <Ionicons name={icon} color={color} size={size} />
    </Pressable>
  );
}

type FeatherIconButtonProps = {
  icon: keyof typeof Feather.glyphMap;
  size: number;
  color: string;
  onPress: () => void;
};

export function FeatherIconButton({
  icon,
  size,
  color,
  onPress,
}: FeatherIconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.pressed}
    >
      <View style={{ padding: 4 }}>
        <Feather name={icon} color={color} size={size} />
      </View>
    </Pressable>
  );
}

type SimpleLineIconButtonProps = {
  icon: keyof typeof SimpleLineIcons.glyphMap;
  size: number;
  color: string;
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
      <SimpleLineIcons name={icon} color={color} size={size} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});
