import { Pressable, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import useModalHook from '@hooks/modalHook';
import Spacing from '@styles/spacing';

function FilterHeaderButton() {
  const { resetModal } = useModalHook();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={resetModal}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <View style={styles.buttonContainer}>
          <AntDesign name='arrowright' size={24} color='black' />
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: Spacing.IOS392Margin,
  },
  buttonContainer: {
    padding: 4,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default FilterHeaderButton;
