import { StyleProp, StyleSheet, TextStyle } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '@styles/colors';

// TODO 별 이미지 나중에 바꾸기
function Star({ style }: { style?: StyleProp<TextStyle> | undefined }) {
  return (
    <MaterialIcons
      name='star'
      size={32}
      style={[styles.starUnselected, style]}
    />
  );
}

const styles = StyleSheet.create({
  starUnselected: {
    color: Colors.emptyStar,
  },
});

export default Star;
