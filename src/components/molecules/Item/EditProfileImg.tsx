import AmiImg from '@components/atoms/Image/AmiImg';
import { Dimensions, Pressable, StyleSheet, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import Colors from '@styles/colors';
import { useSetRecoilState } from 'recoil';
import modalState from '@utils/recoil/modal';

function EditProfileImg({
  imgUrl,
  setImgUrl,
}: {
  imgUrl: string;
  setImgUrl: (url: string) => void;
}) {
  const setModal = useSetRecoilState(modalState);

  const onImgChange = () => {
    setModal({
      modalName: 'IMAGE_CHANGE',
      imageChange: { imgUrl, onChange: setImgUrl },
    });
  };

  return (
    <View>
      <AmiImg imgUrl={imgUrl} />
      <Pressable style={styles.button} onPress={onImgChange}>
        <Octicons name='pencil' size={20} color='white' />
      </Pressable>
    </View>
  );
}

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    left: screenWidth / 2 - 5,
    top: screenHeight / 10 - 6,
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: Colors.fontGray03,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default EditProfileImg;
