import { StyleSheet, Text, View } from 'react-native';

function ProgramText({
  location,
  detail,
}: {
  location: string;
  detail: string;
}) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.title}>{location}</Text>
      <Text style={styles.location}>{detail}</Text>
    </View>
  );
}

// TODO: 현재 테스트 중인 아이폰 모델과 xd에서 보이는 모델이 다르다.
const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    marginLeft: 12,
    justifyContent: 'center',
  },
  title: {
    color: '#000000',
    fontSize: 13, // 원래 14
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: -0.28,
    marginBottom: 3,
  },
  location: {
    color: '#757575',
    fontSize: 11, // 원래 12
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.24,
    paddingRight: 50,
  },
});

export default ProgramText;
