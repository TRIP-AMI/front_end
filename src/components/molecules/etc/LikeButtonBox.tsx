import { View, StyleSheet } from 'react-native';
import LikeHeart from '@/components/atoms/Lottie/LikeHeart';
import Colors from '@/styles/colors';

export default function LikeButtonBox() {
  return (
    <View style={styles.container}>
      <LikeHeart />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: Colors.lineGray04,
    borderRadius: 5,
  },
});
