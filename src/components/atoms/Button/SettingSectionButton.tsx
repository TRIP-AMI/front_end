import { MaterialIcons } from '@expo/vector-icons';
import { Pressable, Text, StyleSheet } from 'react-native';
import Colors from '@/styles/colors';
import Spacing from '@/styles/spacing';

type SettingSectionButtonProps = {
  title: string;
  onPress: () => void;
};

export default function SettiingSectionButton({
  title,
  onPress,
}: SettingSectionButtonProps) {
  return (
    <Pressable style={styles.buttonContainer} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <MaterialIcons
        name='arrow-forward-ios'
        size={20}
        color={Colors.fontGray03}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: Spacing.IOS392Margin,
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 15,
  },
});
