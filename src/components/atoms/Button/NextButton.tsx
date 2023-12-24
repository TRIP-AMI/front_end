import { Pressable, View, Text, StyleSheet } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import Colors from '@/styles/colors';

export default function NextButton({ onPress }: { onPress: () => void }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Text style={styles.text}>Next</Text>
      <View style={{ padding: 2 }}>
        <Octicons name='chevron-right' size={15} color={Colors.fontGray05} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 60,
  },
  pressed: {
    opacity: 0.5,
  },
  text: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.28,
    color: Colors.fontGray05,
  },
});
