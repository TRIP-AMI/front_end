import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSetRecoilState } from 'recoil';
import Fonts from '@/styles/typography';
import Spacing from '@/styles/spacing';
import ProfileBox from '@/components/molecules/Profile/ProfileBox';
import { SelectProfileProps } from '@/navigations/AuthStack/AuthStack';
import { Profile } from '@/types/UserTypes';
import BulletListItem from '@/components/atoms/Text/BulletListItem';
import FooterButton from '@/components/molecules/Button/FooterButton';
import loginState from '@/utils/recoil/login';
import profileType from '@/utils/recoil/profile';
import userState, { UserType } from '@/utils/recoil/user';

export default function SelectProfileScreen({
  route,
}: {
  route: { params: SelectProfileProps };
}) {
  const { nickname, imgUrl } = route.params;
  const [profile, setProfile] = useState<Profile | ''>('');
  const setProfileState = useSetRecoilState<Profile>(profileType);
  const setIsLoggedIn = useSetRecoilState<boolean>(loginState);
  const setUserState = useSetRecoilState<UserType>(userState);
  const descriptions = [
    {
      id: 1,
      content: 'You can still switch profiles after logging in.',
    },
    {
      id: 2,
      content: 'After logging in, each profile can be set.',
    },
  ];

  const onLoginCompleted = async () => {
    if (!profile) return;
    await AsyncStorage.setItem('profile', profile);
    setIsLoggedIn(true);
    setProfileState(profile);
    setUserState(route.params);
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={[Fonts.title, styles.title]}>
          Please select the profile you want to promote.
        </Text>
        <View style={styles.profiles}>
          <ProfileBox
            title='AMI'
            username={nickname}
            imgUrl={imgUrl}
            profile={profile}
            setProfile={setProfile}
          />
          <ProfileBox
            title='TOURIST'
            username={nickname}
            imgUrl={imgUrl}
            profile={profile}
            setProfile={setProfile}
          />
        </View>
        <View style={{ paddingTop: 30 }}>
          {descriptions.map((item) => {
            return (
              <View key={item.id} style={{ paddingBottom: 8 }}>
                <BulletListItem content={item.content} />
              </View>
            );
          })}
        </View>
      </View>
      <FooterButton
        content='Login completed'
        onPress={onLoginCompleted}
        disabled={!profile}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: Spacing.IOS392Margin,
  },
  title: {
    paddingTop: 35,
    paddingHorizontal: '16%',
    textAlign: 'center',
    color: 'black',
  },
  profiles: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 30,
  },
});
