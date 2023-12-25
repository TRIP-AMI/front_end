import { FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ICheckCircleProps {
  isChecked: boolean;
}

export default function CheckCircle({ isChecked }: ICheckCircleProps) {
  if (!isChecked) {
    return (
      <View
        style={[
          styles.checkbox,
          // { borderWidth: 1, borderColor: Colors.primary },
        ]}
      >
        <FontAwesome name='check' size={11} color='white' />
      </View>
    );
  }
  return (
    <LinearGradient colors={['#F97D45', '#EE5626']} style={styles.checkbox}>
      <FontAwesome name='check' size={11} color='white' />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  checkbox: {
    width: 22,
    height: 22,
    borderRadius: 50,
    padding: 5,
    backgroundColor: '#D5D5D5',
  },
});
