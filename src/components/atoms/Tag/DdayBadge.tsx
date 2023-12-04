import { Text, View, StyleSheet } from 'react-native';
import Spacing from '@styles/spacing';

function DdayBadge() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>D-1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 25,
    marginTop: 15,
    marginBottom: 10,
    marginLeft: Spacing.IOS392Margin,
  },
  text: {
    color: '#ffffff',
    fontSize: 14,
    fontFamily: 'Montserrat-Bold',
  },
});

export default DdayBadge;
