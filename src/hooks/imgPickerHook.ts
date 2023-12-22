import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';

const useImgPicker = (initialState: string) => {
  const [imgUri, setPickedImg] = useState(initialState);
  // 권한부여
  const [status, requestPermission] = ImagePicker.useMediaLibraryPermissions();

  const pickImage = async () => {
    if (!status?.granted) {
      const permissions = await requestPermission();
      if (!permissions.granted) {
        return;
      }
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 1,
    });
    if (result) {
      const [{ uri }] = result.assets;
      setPickedImg(uri);
    }
  };

  return {
    imgUri,
    pickImage,
  };
};

export default useImgPicker;
