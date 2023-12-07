import { ImageBackground, StyleSheet } from 'react-native';

function ProgramImg({ imageUrl }: { imageUrl: string }) {
  return <ImageBackground source={{ uri: imageUrl }} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    width: 70,
    height: 70,
    marginVertical: 8,
    marginLeft: 8,
    borderRadius: 5,
  },
});

export default ProgramImg;
