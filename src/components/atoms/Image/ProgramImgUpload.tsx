import { Pressable, Text, StyleSheet, Image } from 'react-native';
import { useEffect } from 'react';
import Colors from '@/styles/colors';
import useImgPicker from '@/hooks/imgPickerHook';

export default function ProgramImgUpload({
  initialState,
  urlChange,
}: {
  initialState: string;
  urlChange: (url: string) => void;
}) {
  const { imgUri, pickImage } = useImgPicker(initialState);

  useEffect(() => {
    urlChange(imgUri);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [imgUri]);

  return (
    <Pressable style={styles.container} onPress={pickImage}>
      {!imgUri && <Text style={styles.textStyle}>Upload {'\n'} Image</Text>}

      {imgUri && (
        <Image
          source={{ uri: imgUri }}
          style={{
            width: '100%',
            height: '100%',
          }}
        />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: 70,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: Colors.lineGray04,
    overflow: 'hidden',
  },
  textStyle: {
    color: '#B9B9B9',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: -0.24,
  },
});
