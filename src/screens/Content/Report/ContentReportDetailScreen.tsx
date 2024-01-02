import { View, StyleSheet } from 'react-native';
import { Controller, useForm } from 'react-hook-form';
import { StackScreenProps } from '@react-navigation/stack';
import ReportTitleText from '@/components/atoms/Text/ReportTitleText';
import { ContentStackParamList } from '@/navigations/Common/ContentStack';
import Spacing from '@/styles/spacing';
import BasicInput from '@/components/atoms/Input/BasicInput';
import ReportFooterButton from '@/components/molecules/Footer/ReportFooterButton';
import useModalHook from '@/hooks/modalHook';
import instance, { BASE_API_URL } from '@/services/config/axios';
import { IReportDetailInputs } from '@/types/FormTypes';

export type ContentReportDetailScreenProps = StackScreenProps<
  ContentStackParamList,
  'ReportDetail'
>;

export default function ContentReportDetailScreen({
  route,
  navigation,
}: ContentReportDetailScreenProps) {
  const { programId, title } = route.params;
  const { control, handleSubmit } = useForm<IReportDetailInputs>({
    defaultValues: {
      content: '',
    },
  });
  const { setModalName } = useModalHook();

  // TODO: API 연결, 에러 처리
  const onSubmit = async (data: IReportDetailInputs) => {
    try {
      await instance.post(`${BASE_API_URL}/report`, {
        programId,
        title,
        content: data.content,
      });
      setModalName('REPORT_COMPLETE');
      navigation.navigate('Content', { id: programId });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <ReportTitleText title={title} />
        <View style={{ paddingVertical: 50 }}>
          <Controller
            control={control}
            name='content'
            render={({ field: { onChange, onBlur, value } }) => {
              return (
                <BasicInput
                  value={value}
                  onBlur={onBlur}
                  onChangeText={onChange}
                  textarea
                  maxLength={500}
                  style={{ height: 210 }}
                />
              );
            }}
          />
        </View>
      </View>
      <ReportFooterButton
        title='Submit'
        onPress={handleSubmit(onSubmit)}
        disabled={false}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: Spacing.IOS392Margin,
    paddingVertical: 28,
  },
});
