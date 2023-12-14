import { View, StyleSheet } from 'react-native';
import TextTitle from '@components/atoms/Text/TextTitle';
import AmiImg from '@components/atoms/Image/AmiImg';

function AmiProfile({ imgUrl, name }: { imgUrl: string; name: string }) {
  return (
    <View>
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
