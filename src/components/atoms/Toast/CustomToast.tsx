import { View, Text, StyleSheet } from 'react-native';

const CustomToast = {
  basic: ({ text1 }: { text1: string }) => (
    <View style={styles.container}>
      <Text style={styles.text}>{text1}</Text>
    </View>
  ),
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    opacity: 0.7,
    height: 40,
    borderRadius: 5,
    width: '88%',
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    lineHeight: 18,
    textAlign: 'center',
  },
});

export default CustomToast;
