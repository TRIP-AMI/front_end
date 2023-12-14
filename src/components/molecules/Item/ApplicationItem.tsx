import { StyleSheet, View, Image, Text, Pressable } from 'react-native';
import Spacing from '@styles/spacing';
import Colors from '@styles/colors';
import BlackBadge from '@components/atoms/Tag/BlackBadge';
import { useSetRecoilState } from 'recoil';
import modalState from '@utils/recoil/modal';

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

  const onSearchPress = () => {
    setModal({ modalName: 'REVIEW' });
  };
  return (
    <View style={styles.container}>
      <Image resizeMode='cover' style={styles.img} source={{ uri: imgUrl }} />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>Application date: {date}</Text>
        <Pressable style={styles.badge} onPress={onSearchPress}>
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
