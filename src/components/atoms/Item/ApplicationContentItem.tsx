import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import BlackBadge from '@components/atoms/Tag/BlackBadge';
import Colors from '@styles/colors';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import modalState from '@utils/recoil/modal';
import { useNavigation } from '@react-navigation/native';
import userState from '@utils/recoil/user';
import { RootStackNavigationProp } from '@/types/NavigationTypes';

function ApplicationContentItem({
  imgUrl,
  title,
  subTitle,
  price,
}: {
  imgUrl: string;
  title: string;
  subTitle: string;
  price: string;
}) {
  const userData = useRecoilValue(userState);
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
        <Pressable onPress={() => navigation.navigate('BookDetails')}>
          <Text style={styles.title}>{title}</Text>
        </Pressable>
        <Text style={styles.subTitle}>{subTitle}</Text>
        <View style={styles.bottomContainer}>
          <Text style={styles.price}>{price}</Text>
          {!userData.isAmi && (
            <Pressable style={styles.badge} onPress={onReviewPress}>
              <BlackBadge style={styles.badgeText} text='Review' />
            </Pressable>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  subContainer: {
    flex: 1,
    marginLeft: 15,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    width: 70,
    height: 67,
    borderRadius: 5,
  },
  title: {
    fontSize: 14,
    fontFamily: 'Montserrat-Medium',
    color: Colors.fontGray01,
    letterSpacing: -0.28,
    marginBottom: 3,
  },
  subTitle: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    color: Colors.fontGray05,
    letterSpacing: -0.28,
    lineHeight: 18,
    marginBottom: 7,
  },
  price: {
    color: Colors.fontGray01,
    fontSize: 12,
    fontFamily: 'Montserrat-Medium',
    letterSpacing: -0.24,
    paddingTop: 7,
  },
  badge: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  badgeText: {
    fontFamily: 'Montserrat-Medium',
  },
});

export default ApplicationContentItem;
