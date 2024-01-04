import { Pressable, StyleSheet, Text } from 'react-native';
import Colors from '@styles/colors';
import Spacing from '@styles/spacing';
import useModalHook from '@hooks/modalHook';

function LogoutButton() {
  const { setModalName } = useModalHook();

  const onLogoutPress = () => {
    setModalName('LOGOUT');
  };

  return (
    <Pressable style={styles.container} onPress={onLogoutPress}>
      <Text style={styles.logout}>Logout</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: Spacing.IOS392Margin,
  },
  logout: {
    color: Colors.fontGray05,
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: -0.32,
    lineHeight: 18,
    textDecorationLine: 'underline',
  },
});

export default LogoutButton;
