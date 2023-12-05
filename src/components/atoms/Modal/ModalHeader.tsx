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
    paddingHorizontal: '7.5%',
  },
  title: {
    flex: 1,
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
    marginHorizontal: '21%',
  },
});
