import { Pressable, StyleSheet, Text } from 'react-native';
import Colors from '@styles/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useSetRecoilState } from 'recoil';
import modalState from '@utils/recoil/modal';
import { ApplicationFilterProps } from '@/types/ModalTypes';

function FilterText({ category, onChange }: ApplicationFilterProps) {
  const setModal = useSetRecoilState(modalState);
  const onFilterPress = () => {
    setModal({
      modalName: 'APPLICATION_FILTER',
      applicationFilter: { category, onChange },
    });
  };

  return (
    <Pressable style={styles.container} onPress={onFilterPress}>
      <Text style={styles.text}>{category}</Text>
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
