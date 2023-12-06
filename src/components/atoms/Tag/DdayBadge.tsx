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
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: 39,
    height: 21,
    opacity: 1,
    marginTop: 15,
    marginBottom: 8,
    marginLeft: Spacing.IOS392Margin,
  },
  text: {
    color: '#ffffff',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
  },
});

export default DdayBadge;
