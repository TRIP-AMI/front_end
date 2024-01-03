import { NameInput } from '@components/molecules/Input/LoginInput';
import { Dimensions, Keyboard, StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';
import ConfirmButton from '@components/atoms/Button/ConfirmButton';

type dataType = {
  nickname: string;
};

function EditNameInput({
  userName,
  setUserName,
}: {
  userName: string;
  setUserName: (name: string) => void;
}) {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      nickname: '',
    },
  });

  // TODO API 연결
  // TODO 동일 이름 입력 시 에러 처리
  const onSubmit = (data: dataType) => {
    console.log('data::::', data);
    Keyboard.dismiss();
    reset();
    setUserName(data.nickname);
  };

  return (
    <View style={styles.container}>
      <View style={styles.input}>
        <NameInput
          control={control}
          errorText={errors.nickname?.message}
          autoFocus={false}
          name={userName}
        />
      </View>
      <View>
        <ConfirmButton
          disabled={!!errors.nickname || !isDirty || !isValid}
          content='Confirm'
          onPress={handleSubmit(onSubmit)}
          customStyle={styles.button}
        />
      </View>
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
    marginRight: 5,
  },
  button: {
    width: screenWidth * 0.211,
  },
});

export default EditNameInput;
