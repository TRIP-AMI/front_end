import { NameInput } from '@components/molecules/Input/LoginInput';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useForm } from 'react-hook-form';
import OutlinedButton from '@components/atoms/Button/OutlinedButton';
import { useState } from 'react';

type dataType = {
  nickname: string;
};

function EditNameInput() {
  // TODO API 연결해서 이름 가져오기
  const [userName, setUserName] = useState('Jenny');

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
  const onSubmit = (data: dataType) => {
    console.log('data::::', data);
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
      <OutlinedButton
        disabled={!!errors.nickname || !isDirty || !isValid}
        content='Confirm'
        onPress={handleSubmit(onSubmit)}
        customStyle={styles.button}
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
    marginRight: 5,
  },
  button: {
    width: screenWidth * 0.211,
  },
});

export default EditNameInput;
