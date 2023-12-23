import { Text, StyleSheet, Image, View } from 'react-native';
import Colors from '@styles/colors';

function BookDetailContent({
  title,
  date,
  imgUrl,
}: {
  title: string;
  date: string;
  imgUrl: string;
}) {
  return (
    <>
      <Text style={styles.text}>Application Program</Text>
      <View style={styles.container}>
        <Image style={styles.img} source={{ uri: imgUrl }} />
        <View style={styles.subContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>Application date: {date}</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
  },
  subContainer: {
    marginLeft: 15,
  },
  text: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 15,
  },
  img: {
    width: 104,
    height: 100,
    borderRadius: 5,
  },
  title: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 19,
    letterSpacing: -0.32,
  },
  date: {
    color: Colors.fontGray07,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 15,
    letterSpacing: -0.24,
  },
});

export default BookDetailContent;
