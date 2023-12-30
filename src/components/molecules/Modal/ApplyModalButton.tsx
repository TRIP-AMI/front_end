import { View, Text, StyleSheet } from 'react-native';
import Colors from '@/styles/colors';
import BasicButton from '@/components/atoms/Button/BasicButton';
import useModalHook from '@/hooks/modalHook';
import SectionDividerBar from '@/components/atoms/etc/SectionDividerBar';

export default function ApplyModalButton({
  price,
  selectedDate,
}: {
  price: number;
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
    <>
      <SectionDividerBar style={styles.bar} />
      <View style={styles.container}>
        <View style={styles.priceTag}>
          {price > 0 && (
            <Text style={styles.text}>{price.toLocaleString()}</Text>
          )}
          <Text style={styles.text}>{price > 0 ? ' won' : 'Free'}</Text>
        </View>
        <BasicButton content='Apply' round onPress={onApply} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  bar: {
    height: 1,
    color: Colors.lineGray03,
  },
  container: {
    paddingHorizontal: 24,
    width: '100%',
  },
  priceTag: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingVertical: 12,
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 18,
    lineHeight: 17,
    color: Colors.primary,
  },
});
