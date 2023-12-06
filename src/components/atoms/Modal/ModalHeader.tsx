import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { IconButton } from '@/components/atoms/IconButton/IconButton';
import Colors from '@/styles/colors';

export function ModalHeaderWithTitle({
  icon,
  title,
  onClose,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  onClose: () => void;
}) {
  return (
    <View style={styles.container}>
      <IconButton icon={icon} size={24} color='black' onPress={onClose} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.empty} />
    </View>
  );
}

export function BasicModalHeader({
  icon,
  onClose,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  onClose: () => void;
}) {
  return (
    <IconButton
      icon={icon}
      size={24}
      color={Colors.fontGray01}
      onPress={onClose}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '6%',
    justifyContent: 'flex-start',
  },
  title: {
    flex: 1,
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    letterSpacing: -0.48,
    color: Colors.modalTitle,
    textAlign: 'center',
  },
  empty: {
    width: 24,
  },
});
