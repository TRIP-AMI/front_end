import { View, StyleSheet } from 'react-native';
import Colors from '@/styles/colors';
import BasicButton from '@/components/atoms/Button/BasicButton';
import useModalHook from '@/hooks/modalHook';

export default function ApplyModalButton({
  selectedDate,
}: {
  selectedDate: string;
}) {
  const { setModalName } = useModalHook();

  // TODO: user 정보 받아오기
  const user = {
    id: 1,
    name: 'hellooo',
    email: 'tripami42@gmail.com',
  };

  const onApply = () => {
    setModalName('APPLY_CHECK', {
      applyCheck: {
        date: selectedDate,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      },
    });
  };

  return (
    <View style={styles.container}>
      <BasicButton content='Apply' round onPress={onApply} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    width: '100%',
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    lineHeight: 17,
    color: Colors.primary,
  },
});
