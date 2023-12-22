import { Dispatch, SetStateAction } from 'react';
import { Text, StyleSheet, Pressable } from 'react-native';
import AmiProfile from '@components/molecules/Item/AmiProfile';
import Colors from '@/styles/colors';
import { Profile } from '@/types/UserTypes';

type ProfileBoxProps = {
  title: Profile;
  username: string;
  profile: Profile | undefined;
  setProfile: Dispatch<SetStateAction<Profile | undefined>>;
};

export default function ProfileBox({
  title,
  username,
  profile,
  setProfile,
}: ProfileBoxProps) {
  const detail = title === 'AMI' ? 'Guiding' : 'Look around';

  return (
    <Pressable
      onPress={() => setProfile(title)}
      style={({ pressed }) => [
        styles.profileBox,
        pressed && styles.pressed,
        profile === title && styles.pressedBorder,
      ]}
    >
      <Text style={styles.profile}>{title}</Text>
      <Text style={styles.detail}>{detail}</Text>
      <AmiProfile
        imgUrl='https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg'
        name={username}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  profileBox: {
    borderWidth: 1,
    borderColor: Colors.lineGray04,
    paddingVertical: 15,
    paddingHorizontal: 27,
    borderRadius: 5,
  },
  pressedBorder: {
    borderWidth: 2,
    borderColor: Colors.primary,
    paddingHorizontal: 26,
    paddingVertical: 14,
  },
  profile: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: Colors.fontGray03,
    textAlign: 'center',
  },
  detail: {
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    color: Colors.fontGray05,
    textAlign: 'center',
    paddingBottom: 15,
  },
  pressed: {
    opacity: 0.5,
  },
});
