import { Image, ImageStyle, StyleProp, StyleSheet } from 'react-native';

function AmiImg({
  imgUrl,
  style,
}: {
  imgUrl: string;
  // eslint-disable-next-line react/require-default-props
  style?: StyleProp<ImageStyle> | undefined;
}) {
  return <Image source={{ uri: imgUrl }} style={[styles.image, style]} />;
}

const styles = StyleSheet.create({
  image: {
    width: 107,
    height: 107,
    alignSelf: 'center',
    borderRadius: 100,
    marginBottom: 8,
  },
});

export default AmiImg;
