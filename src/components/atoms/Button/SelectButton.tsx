import { Text, StyleSheet, Pressable } from 'react-native';
import { Feather } from '@expo/vector-icons';

export default function SelectButton({
  title,
  onPress,
}: {
  title: string;
  onPress: () => void;
}) {
  return (
    <Pressable style={styles.selectBoxWrap} onPress={onPress}>
      <Text>{title}</Text>
      <Feather name='chevron-down' size={24} color='#A1A5AE' />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  infoText: {
    marginVertical: 30,
    color: '#8E8E8E',
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    lineHeight: 22,
  },
  selectBoxWrap: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '48.5%',
    padding: 14,
    borderWidth: 1,
    borderColor: '#ECECEC',
    borderRadius: 5,
  },
});
