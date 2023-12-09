import { View, StyleSheet, StyleProp, TextStyle } from 'react-native';
import TextTitle from '@components/atoms/Text/TextTitle';
import AmiImg from '@components/atoms/Image/AmiImg';

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
      <AmiImg imgUrl={imgUrl} />
      <TextTitle style={styles.name}>{name}</TextTitle>
    </View>
  );
}

const styles = StyleSheet.create({
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
