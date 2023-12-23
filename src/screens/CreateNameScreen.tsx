import { useForm } from 'react-hook-form';
import { Text, View, StyleSheet } from 'react-native';
import Toast from 'react-native-toast-message';
import { NameInput } from '@/components/molecules/Input/LoginInput';
import {
  CreateNameProps,
  RootStackNavigationProp,
} from '@/types/NavigationTypes';
import JoinLayout from '@/components/organisms/Layout/JoinLayout';
import BottomButtons from '@/components/atoms/Button/BottomButtons';
import useModalHook from '@/hooks/modalHook';
import Colors from '@/styles/colors';
import instance, { BASE_API_URL } from '@/services/config/axios';
import Spacing from '@/styles/spacing';

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
        email: route.params.email,
      });
    } catch (error) {
      Toast.show({
        type: 'basic',
        text1: 'The name is already in use.',
        bottomOffset: Spacing.ToastWithButtons,
      });
    }
  };

  return (
    <>
      <JoinLayout title='Please enter your name'>
        <View style={styles.inputContainer}>
          <View style={styles.inputBox}>
            <NameInput control={control} />
            <Text style={styles.text}>No more than 12 characters.</Text>
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
