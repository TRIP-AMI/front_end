import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ScrollView, SafeAreaView } from 'react-native';
import Spacing from '@/styles/spacing';
import SectionDividerBar from '@/components/atoms/etc/SectionDividerBar';
import useUpload, { CreateContentBasicForm } from '@/hooks/uploadHook';
import BasicButton from '@/components/atoms/Button/BasicButton';
import ProgramCourseWrap from '@/components/organisms/Section/createContent/ProgramCourseWrap';
import ProgramCostWrap from '@/components/organisms/Section/createContent/ProgramCostWrap';
import ProgramBasicInfoWrap from '@/components/organisms/Section/createContent/ProgramBasicInfoWrap';

export default function UploadScreen() {
  const { control, handleSubmit } = useUpload();

  const onSubmit = (data: CreateContentBasicForm) => {
    console.log('form data', data);
  };

  return (
    <SafeAreaView>
      <StatusBar style='auto' />
      <ScrollView style={styles.container}>
        {/* basic info */}
        <View style={styles.basicInfoWrap}>
          <ProgramBasicInfoWrap control={control} />
        </View>

        {/* Program Course */}
        <SectionDividerBar />
        <View style={styles.courseWrap}>
          <ProgramCourseWrap control={control} />
        </View>
        {/* Program Cost */}
        <SectionDividerBar />
        <View style={styles.costWrap}>
          <ProgramCostWrap control={control} />
        </View>

        {/* submit */}
        <BasicButton content='Upload' onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // paddingTop: 15,
    backgroundColor: '#ffffff',
  },
  basicInfoWrap: {
    marginTop: 15,
    paddingHorizontal: Spacing.IOS392Margin,
  },
  courseWrap: { paddingHorizontal: Spacing.IOS392Margin },
  costWrap: { marginTop: 25, paddingHorizontal: Spacing.IOS392Margin },
});
