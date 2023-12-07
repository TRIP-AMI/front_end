import { Image, StyleSheet } from 'react-native';
import TextTitle from '@components/atoms/Text/TextTitle';

function MyProfile({ imgUrl, name }: { imgUrl: string; name: string }) {
  return (
    <>
      <Image source={{ uri: imgUrl }} style={styles.image} />
      <TextTitle style={styles.name}>{name}</TextTitle>
    </>
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

export default MyProfile;
