import { Text, Pressable, StyleSheet, View } from 'react-native';
import Colors from '@styles/colors';
import { Ionicons } from '@expo/vector-icons';
import { useRecoilState } from 'recoil';
import profileType from '@utils/recoil/profile';
import AsyncStorage from '@react-native-async-storage/async-storage';

function SwitchButton() {
  const [profile, setProfileType] = useRecoilState(profileType);

  const changeProfileType = async () => {
    if (profile === 'AMI') {
      await AsyncStorage.setItem('profile', 'TOURIST');
      setProfileType('TOURIST');
    } else {
      await AsyncStorage.setItem('profile', 'AMI');
      setProfileType('AMI');
    }
  };

  return (
    <Pressable style={styles.container} onPress={() => changeProfileType()}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{profile === 'AMI' ? 'Tourist' : 'Ami'}</Text>
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
    paddingLeft: 10,
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
