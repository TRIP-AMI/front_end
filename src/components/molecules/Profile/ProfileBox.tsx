import { Dispatch, SetStateAction } from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import AmiProfile from '@components/molecules/Item/AmiProfile';
import Colors from '@/styles/colors';
import { Profile } from '@/types/UserTypes';

type ProfileBoxProps = {
  title: Profile;
  username: string;
  imgUrl: string;
  profile: Profile | '';
  setProfile: Dispatch<SetStateAction<Profile | ''>>;
};

export default function ProfileBox({
  title,
  username,
  imgUrl,
  profile,
  setProfile,
}: ProfileBoxProps) {
  const titleText = title === 'AMI' ? title : 'Tourist';
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
      <Text style={styles.profile}>{titleText}</Text>
      <Text style={styles.detail}>{detail}</Text>
      <View style={styles.image}>
        <AmiProfile imgUrl={imgUrl} name={username} />
      </View>
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
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.fontGray05,
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.5,
  },
  image: {
    paddingTop: 15,
  },
});
