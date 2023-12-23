import { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Fonts from '@/styles/typography';
import Spacing from '@/styles/spacing';
import ProfileBox from '@/components/molecules/Profile/ProfileBox';
import { SelectProfileProps } from '@/types/NavigationTypes';
import { Profile } from '@/types/UserTypes';
import BulletListItem from '@/components/atoms/Text/BulletListItem';
import FooterButton from '@/components/molecules/Button/FooterButton';

export default function SelectProfileScreen({
  route,
}: {
  route: { params: SelectProfileProps };
}) {
  const { username } = route.params;
  const [profile, setProfile] = useState<Profile | undefined>();

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

  const onLoginCompleted = () => {};

  return (
    <>
      <View style={styles.container}>
        <Text style={[Fonts.title, styles.title]}>
          Please select the profile you want to promote.
        </Text>
        <View style={styles.profiles}>
          <ProfileBox
            title='AMI'
            username={username}
            profile={profile}
            setProfile={setProfile}
          />
          <ProfileBox
            title='Traveler'
            username={username}
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
