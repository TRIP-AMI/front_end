import { useForm, Controller } from 'react-hook-form';
import { Text, View, StyleSheet } from 'react-native';
import BasicInput from '@/components/atoms/Input/BasicInput';
import Colors from '@/styles/colors';
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
            <Controller
              control={control}
              rules={{
                required: 'This is required',
                maxLength: {
                  value: 12,
                  message: 'The name is too long (maximum 12 characters)',
                },
              }}
              render={({ field: { onChange, value } }) => (
                <BasicInput
                  style={styles.input}
                  value={value}
                  autoComplete='nickname'
                  onChangeText={onChange}
                  placeholder='Enter a name'
                  placeholderTextColor={Colors.fontGray05}
                  autoCorrect={false}
                  autoCapitalize='none'
                  autoFocus
                />
              )}
              name='nickname'
            />
            {errors.nickname && (
              <Text style={styles.error}>{errors.nickname.message}</Text>
            )}
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
  title: {
    fontSize: 20,
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
    paddingVertical: 40,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  inputBox: {
    width: '100%',
  },
  input: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 18,
    letterSpacing: -0.28,
  },
  button: {
    width: '25%',
    alignItems: 'center',
  },
  error: {
    color: '#F22222',
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 18,
    letterSpacing: -0.28,
    paddingHorizontal: 5,
  },
});
