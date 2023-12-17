import { Text, Pressable, StyleSheet, View } from 'react-native';
import Spacing from '@styles/spacing';
import Colors from '@styles/colors';
import { Ionicons } from '@expo/vector-icons';
import { useRecoilState } from 'recoil';
import userState from '@utils/recoil/user';

function SwitchButton() {
  const [userData, setUserData] = useRecoilState(userState);

  function changeIsAmi() {
    setUserData({ ...userData, isAmi: !userData.isAmi });
  }

  return (
    <Pressable style={styles.container} onPress={() => changeIsAmi()}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{userData.isAmi ? 'Tourist' : 'Ami'}</Text>
        {/* TODO 나중에 Icon 바꾸기 */}
        <Ionicons
          name='swap-horizontal'
          size={14}
          color='white'
          style={{ marginLeft: 3.32 }}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: Spacing.IOS392Margin,
  },
  textContainer: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: Colors.primary,
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: -0.24,
    lineHeight: 18,
  },
});

export default SwitchButton;
