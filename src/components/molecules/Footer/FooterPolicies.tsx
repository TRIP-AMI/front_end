import { View, StyleSheet, Pressable } from 'react-native';
import FooterDefaultText from '@components/atoms/Text/FooterDefaultText';

function FooterPolicies() {
  return (
    <View style={styles.policies}>
      <Pressable
        onPress={() => console.log('Privacy Policy')}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <FooterDefaultText>Privacy Policy</FooterDefaultText>
      </Pressable>
      <Pressable
        onPress={() => console.log('Operational Policy')}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <FooterDefaultText>Operational Policy</FooterDefaultText>
      </Pressable>
      <Pressable
        onPress={() => console.log('Terms of Service')}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <FooterDefaultText>Terms of Service</FooterDefaultText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  policies: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: 10,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default FooterPolicies;
