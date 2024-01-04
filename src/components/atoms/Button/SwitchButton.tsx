import { Text, Pressable, StyleSheet, View } from 'react-native';
import Colors from '@styles/colors';
import { AntDesign } from '@expo/vector-icons';
import { useRecoilState } from 'recoil';
import profileType from '@utils/recoil/profile';
import AsyncStorage from '@react-native-async-storage/async-storage';
import showToast from '@utils/toast/toast';
import Spacing from '@/styles/spacing';

function SwitchButton() {
  const [profile, setProfileType] = useRecoilState(profileType);

  const changeProfileType = async () => {
    if (profile === 'AMI') {
      await AsyncStorage.setItem('profile', 'TOURIST');
      setProfileType('TOURIST');
      showToast('Switching AMI Profile.', Spacing.ToastBottomNav);
    } else {
      await AsyncStorage.setItem('profile', 'AMI');
      setProfileType('AMI');
      showToast('Switching Traveler Profile.', Spacing.ToastBottomNav);
    }
  };

  return (
    <Pressable style={styles.container} onPress={() => changeProfileType()}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{profile === 'AMI' ? 'Tourist' : 'Ami'}</Text>
        {/* TODO 나중에 Icon 바꾸기 */}
        <AntDesign
          name='retweet'
          size={12}
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
