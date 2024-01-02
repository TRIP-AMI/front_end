import { useForm } from 'react-hook-form';
import { View, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { NameInput } from '@/components/molecules/Input/LoginInput';
import { AuthStackParamList } from '@/navigations/AuthStack/AuthStack';
import JoinLayout from '@/components/organisms/Layout/JoinLayout';
import BottomButtons from '@/components/atoms/Button/BottomButtons';
import useModalHook from '@/hooks/modalHook';
import Colors from '@/styles/colors';
import instance, { BASE_API_URL } from '@/services/config/axios';
import Spacing from '@/styles/spacing';
import showToast from '@/utils/toast/toast';

interface ICreateNameInputs {
  nickname: string;
}

export type CreateNameScreenProps = StackScreenProps<
  AuthStackParamList,
  'CreateName'
>;

export default function CreateNameScreen({
  route,
  navigation,
}: CreateNameScreenProps) {
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
  const { email, agreedMarketing } = route.params;

  // TODO: API 연결, 에러 처리
  const onNext = async (data: ICreateNameInputs) => {
    if (errors.nickname) return;
    try {
      await instance.post(`${BASE_API_URL}/nickname`, {
        nickName: data.nickname,
      });
      navigation.navigate('CreatePassword', {
        mode: 'CREATE',
        nickname: data.nickname,
        email,
        agreedMarketing,
      });
    } catch (error) {
      showToast('The name is already in use.', Spacing.ToastWithButtons);
    }
  };

  const content = {
    title: 'Please enter your name',
    subtitle: 'No more than 12 characters.',
  };

  return (
    <>
      <JoinLayout title={content.title} subtitle={content.subtitle}>
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
  text: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: -0.24,
    color: Colors.fontGray03,
    paddingTop: 10,
  },
});
