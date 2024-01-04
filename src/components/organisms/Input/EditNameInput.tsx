import { NameInput } from '@components/molecules/Input/LoginInput';
import { Dimensions, Keyboard, StyleSheet, View } from 'react-native';
import { useForm, useWatch } from 'react-hook-form';
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
  // TODO 동일 이름 입력 시 에러 문구 처리
  const onSubmit = (data: dataType) => {
    console.log('data::::', data);
    Keyboard.dismiss();
    reset();
    setUserName(data.nickname);
  };

  const nicknameValue = useWatch({ control, name: 'nickname' });

  // isDirty: 사용자가 input에 무언가를 입력했는지 여부
  // isValid: 입력된 값이 유효한지 여부
  const isDisabled = () => {
    return (
      !!errors.nickname || !isDirty || !isValid || nicknameValue === userName
    );
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
          disabled={isDisabled()}
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