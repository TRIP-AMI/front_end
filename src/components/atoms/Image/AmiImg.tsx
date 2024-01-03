import {
  Dimensions,
  Image,
  ImageStyle,
  StyleProp,
  StyleSheet,
  View,
} from 'react-native';

function AmiImg({
  imgUrl,
  style,
}: {
  imgUrl: string;
  style?: StyleProp<ImageStyle> | undefined;
}) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imgUrl }} style={[styles.image, style]} />
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    shadowColor: '#00000029',
    shadowRadius: 10,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
      blur: 4,
    },
  },
  image: {
    width: screenWidth * 0.272,
    height: screenWidth * 0.272,
    alignSelf: 'center',
    borderRadius: 100,
    marginBottom: 8,
  },
});

export default AmiImg;
