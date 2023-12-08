import { View, Image, StyleSheet, StyleProp, TextStyle } from 'react-native';
import TextTitle from '@components/atoms/Text/TextTitle';

function AmiProfile({
  imgUrl,
  name,
  style,
}: {
  imgUrl: string;
  name: string;
  // eslint-disable-next-line react/require-default-props
  style?: StyleProp<TextStyle> | undefined;
}) {
  return (
    <View style={[null, style]}>
      <Image source={{ uri: imgUrl }} style={styles.image} />
      <TextTitle style={styles.name}>{name}</TextTitle>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 107,
    height: 107,
    alignSelf: 'center',
    borderRadius: 100,
    marginBottom: 8,
  },
  name: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    letterSpacing: -0.36,
    alignSelf: 'center',
    marginBottom: 12,
  },
});

export default AmiProfile;
