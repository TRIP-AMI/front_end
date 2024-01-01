import { Pressable, StyleSheet, Text } from 'react-native';
import Colors from '@styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import useModalHook from '@hooks/modalHook';

// TODO CreateContentScreen 병합되면 모달창 가져다가 사용
function FilterText({ text }: { text: string }) {
  const { setModalName } = useModalHook();

  const onFilterPress = () => {
    setModalName('APPLICATION_FILTER');
  };

  return (
    <Pressable style={styles.container} onPress={onFilterPress}>
      <Text style={styles.text}>{text}</Text>
      <MaterialIcons
        name='keyboard-arrow-down'
        size={18}
        color={Colors.fontGray05}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: Colors.fontGray03,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
});

export default FilterText;
