import { StyleSheet, View, Image, Text, Pressable } from 'react-native';
import Spacing from '@styles/spacing';
import Colors from '@styles/colors';
import BlackBadge from '@components/atoms/Tag/BlackBadge';
import { useSetRecoilState } from 'recoil';
import modalState from '@utils/recoil/modal';
import { useNavigation } from '@react-navigation/native';
import { RootStackNavigationProp } from '@/types/NavigationTypes';

function ApplicationItem({
  imgUrl,
  title,
  date,
}: {
  imgUrl: string;
  title: string;
  date: string;
}) {
  const setModal = useSetRecoilState(modalState);
  const navigation = useNavigation<RootStackNavigationProp>();

  const onReviewPress = () => {
    setModal({
      modalName: 'REVIEW',
      applicationItem: { imgUrl, title },
    });
  };

  // TODO 알맞는 컨텐츠로 이동해야 함
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate('Content')}>
        <Image resizeMode='cover' style={styles.img} source={{ uri: imgUrl }} />
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable onPress={() => console.log('예약 페이지로 이동 예정')}>
          <Text style={styles.title}>{title}</Text>
        </Pressable>
        <Text style={styles.date}>{date}</Text>
        <Pressable style={styles.badge} onPress={onReviewPress}>
          <BlackBadge text='Review' />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: Spacing.IOS392Margin,
  },
  img: {
    width: 104,
    height: 100,
    borderRadius: 5,
  },
  subContainer: {
    flex: 1,
    marginLeft: 15,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#000000',
    letterSpacing: -0.32,
    lineHeight: 19,
    marginVertical: 5,
  },
  date: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    color: Colors.fontGray07,
    letterSpacing: -0.24,
    lineHeight: 15,
    marginBottom: 35,
  },
  badge: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});

export default ApplicationItem;
