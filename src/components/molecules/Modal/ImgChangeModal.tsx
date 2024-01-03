import { Pressable, StyleSheet } from 'react-native';
import BasicCheckModal from '@components/atoms/Modal/BasicCheckModal';
import useModalHook from '@hooks/modalHook';
import useImgPicker from '@hooks/imgPickerHook';
import { useEffect } from 'react';
import BasicModalText from '@components/atoms/Text/BasicModalText';

function ImgChangeModal({
  imgUrl,
  onChange,
}: {
  imgUrl: string;
  onChange: (url: string) => void;
}) {
  const dummyBasicProfile =
    'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg';
  const { imgUri, pickImage } = useImgPicker(imgUrl);
  const { resetModal } = useModalHook();

  useEffect(() => {
    onChange(imgUri);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgUri]);

  // TODO 바뀌는데 반응이 느림
  const onImgChange = () => {
    pickImage().then(() => {
      resetModal();
    });
  };

  const onDefaultChange = () => {
    onChange(dummyBasicProfile);
    resetModal();
  };

  // TODO default image url 추가하기
  const changeList = [
    { text: 'Change profile picture', onPress: onImgChange },
    { text: 'Change to Default', onPress: onDefaultChange },
  ];

  return (
    <BasicCheckModal
      onCheck={resetModal}
      buttonText='Cancel'
      customModalViewStyle={styles.modalView}
    >
      {changeList.map((item, index) => (
        <Pressable key={index.toString() + item.text} onPress={item.onPress}>
          <BasicModalText style={styles.text} content={item.text} />
        </Pressable>
      ))}
    </BasicCheckModal>
  );
}

const styles = StyleSheet.create({
  modalView: {
    alignItems: 'flex-start',
  },
  text: {
    color: 'black',
    lineHeight: 37,
  },
});

export default ImgChangeModal;
