import { View, StyleSheet, Pressable } from 'react-native';
import Colors from '@styles/colors';
import FooterDefaultText from '@components/atoms/Text/FooterDefaultText';

function FooterInfo() {
  return (
    <View>
      {/* address */}
      <FooterDefaultText style={{ marginBottom: 5 }}>
        416 Innovation Academy, Gaepo-ro, Gangnam-gu , Seoul
      </FooterDefaultText>
      {/* content */}
      <FooterDefaultText>
        For error reports and issues related to the application, direct your
        inquiries to our application admin
      </FooterDefaultText>
      {/* email */}
      <Pressable
        onPress={() => console.log('email')}
        style={({ pressed }) => pressed && styles.pressed}
      >
        <FooterDefaultText style={{ color: Colors.main }}>
          tripamics@gmail.com
        </FooterDefaultText>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  pressed: {
    opacity: 0.5,
  },
});

export default FooterInfo;
