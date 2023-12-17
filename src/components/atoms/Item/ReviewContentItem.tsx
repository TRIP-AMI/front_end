import { StyleSheet, Image, Text, View } from 'react-native';
import Spacing from '@styles/spacing';

function ReviewContentItem({
  imgUrl,
  title,
}: {
  imgUrl: string;
  title: string;
}) {
  return (
    <View style={styles.container}>
      <Image resizeMode='cover' style={styles.img} source={{ uri: imgUrl }} />
      <View style={styles.subContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginHorizontal: Spacing.IOS392Margin,
  },
  subContainer: {
    marginLeft: 15,
  },
  img: {
    width: 104,
    height: 100,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    color: '#000000',
    letterSpacing: -0.32,
    lineHeight: 19,
    marginVertical: 5,
  },
});

export default ReviewContentItem;
