import { StyleSheet, View, Text } from 'react-native';
import Colors from '@styles/colors';

function CompletedBadge({ isCompleted }: { isCompleted: boolean }) {
  const Completed = 'Completed';
  const Waiting = 'Waiting';

  return (
    <View style={[styles.container, isCompleted && styles.pressContainer]}>
      <Text style={[styles.text, isCompleted && styles.pressText]}>
        {isCompleted ? Completed : Waiting}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderColor: Colors.fontGray05,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 9,
    paddingVertical: 3,
  },
  pressContainer: {
    borderColor: Colors.primary,
  },
  text: {
    color: Colors.fontGray05,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
  },
  pressText: {
    color: Colors.primary,
  },
});

export default CompletedBadge;
