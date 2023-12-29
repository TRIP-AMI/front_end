import { View, StyleSheet } from 'react-native';
import { ProgramCourseImg } from '@/types/program/ProgramCourse';
import BasicInput from '@/components/atoms/Input/BasicInput';
import ProgramImgUpload from '@/components/atoms/Image/ProgramImgUpload';
import Colors from '@/styles/colors';

export default function MidContent({
  imgInfo,
  urlChange,
  titleChange,
  subTitleChange,
}: {
  imgInfo: ProgramCourseImg;
  urlChange: (url: string) => void;
  titleChange: (value: string) => void;
  subTitleChange: (value: string) => void;
}) {
  return (
    <View style={styles.midWrap}>
      <ProgramImgUpload urlChange={urlChange} initialState={imgInfo.imgUrl} />
      <View style={{ marginVertical: 8 }}>
        <BasicInput
          value={imgInfo.title}
          onChangeText={titleChange}
          placeholder='Place title (no more than 30)'
          style={{ fontSize: 12 }}
        />
      </View>
      <BasicInput
        value={imgInfo.subTitle}
        onChangeText={subTitleChange}
        placeholder='Location exact location (no more than 50)'
        style={{ fontSize: 12 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  midWrap: {
    marginVertical: 8,
    padding: 8,
    backgroundColor: Colors.second,
    borderRadius: 5,
  },
});
