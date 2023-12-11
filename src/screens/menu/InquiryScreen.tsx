import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import BasicInput from '@/components/atoms/Input/BasicInput';
import Spacing from '@/styles/spacing';
import BasicButton from '@/components/atoms/Button/BasicButton';

export default function ContactScreen() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      content: '',
    },
  });

  const onSubmit = (data: unknown) => {
    console.log('data::::', data);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
          {/* info */}
          <View style={{ paddingVertical: 30 }}>
            <Text style={styles.infoTitle}>
              If you have any questions, {'\n'} feel free to ask!
            </Text>
          </View>
          {/* input */}
          <View>
            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Title is required.',
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => {
                return (
                  <BasicInput
                    value={value}
                    onBlur={onBlur}
                    onChangeText={onChange}
                    placeholder='Title'
                    error={errors.title?.message}
                  />
                );
              }}
              name='title'
            />

            <View style={{ marginVertical: 5 }} />

            <Controller
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Content is required.',
                },
                maxLength: {
                  value: 500,
                  message: 'The maximum input is 500 characters.',
                },
              }}
              render={({ field: { onChange, onBlur, value } }) => {
                return (
                  <BasicInput
                    textarea
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    placeholder='Feel free to leave your ask!'
                    maxLength={500}
                    error={errors.content?.message}
                    style={{ height: 210 }}
                  />
                );
              }}
              name='content'
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
      {/* TODO: disabled 조건 추가 필요 */}
      <BasicButton content='Submit' onPress={handleSubmit(onSubmit)} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  infoTitle: {
    textAlign: 'center',
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: -0.32,
  },
});
