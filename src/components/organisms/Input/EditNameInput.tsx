import { NameInput } from '@components/molecules/Input/LoginInput';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';
import OutlinedButton from '@components/atoms/Button/OutlinedButton';

function EditNameInput() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      nickname: '',
    },
  });

  // TODO API 연결
  const onSubmit = (data: unknown) => {
    console.log('data::::', data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <NameInput control={control} errorText={errors.nickname?.message} />
      </View>
      <OutlinedButton
        disabled={!!errors.nickname}
        content='Confirm'
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  );
}

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  input: {
    width: screenWidth * 0.653,
  },
});

export default EditNameInput;
