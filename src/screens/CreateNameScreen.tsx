import { useForm } from 'react-hook-form';
import { View, StyleSheet } from 'react-native';
import { NameInput } from '@/components/molecules/Input/LoginInput';
import {
  CreateNameProps,
  RootStackNavigationProp,
} from '@/types/NavigationTypes';
import JoinLayout from '@/components/organisms/Layout/JoinLayout';
import BottomButtons from '@/components/atoms/Button/BottomButtons';
import useModalHook from '@/hooks/modalHook';

interface ICreateNameInputs {
  nickname: string;
}

export default function CreateNameScreen({
  route,
  navigation,
}: {
  route: { params: CreateNameProps };
  navigation: RootStackNavigationProp;
}) {
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
  const { setModalName } = useModalHook();

  const onNext = (data: ICreateNameInputs) => {
    if (errors.nickname) return;
    navigation.navigate('CreatePassword', {
      nickname: data.nickname,
      email: route.params.email,
    });
  };

  return (
    <>
      <JoinLayout title='Please enter your name'>
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <NameInput control={control} errorText={errors.nickname?.message} />
          </View>
        </View>
      </JoinLayout>
      <BottomButtons
        onCancel={() => setModalName('JOIN_CANCEL')}
        onNext={handleSubmit(onNext)}
        disabled={!!errors.nickname}
      />
    </>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  inputBox: {
    width: '100%',
  },
});
