import { StyleSheet, Text } from 'react-native';
import Colors from '@styles/colors';

function EmptyText({
  text,
  fullScreen,
}: {
  text: string;
  fullScreen?: boolean;
}) {
  return (
    <Text style={[styles.text, fullScreen && styles.fullScreenText]}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: Colors.fontGray03,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: -0.32,
    lineHeight: 22,
    marginTop: 40,
    marginBottom: 140,
    alignSelf: 'center',
  },
  fullScreenText: {
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 100,
  },
});

export default EmptyText;
