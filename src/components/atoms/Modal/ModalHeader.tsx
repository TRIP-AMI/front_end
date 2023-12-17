import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { IconButton } from '@/components/atoms/Button/IconButton';
import Colors from '@/styles/colors';
import useModalHook from '@/hooks/modalHook';

export function ModalHeaderWithTitle({
  icon,
  title,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
}) {
  const { resetModal } = useModalHook();

  return (
    <View style={styles.container}>
      <IconButton icon={icon} size={24} color='black' onPress={resetModal} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.empty} />
    </View>
  );
}

export function BasicModalHeader({
  icon,
}: {
  icon: keyof typeof Ionicons.glyphMap;
}) {
  const { resetModal } = useModalHook();
  return (
    <View style={styles.iconContainer}>
      <IconButton
        icon={icon}
        size={24}
        color={Colors.fontGray05}
        onPress={resetModal}
      />
    </View>
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
    color: Colors.fontGray02,
    textAlign: 'center',
  },
  empty: {
    width: 24,
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
