import { StyleSheet, View, Pressable } from 'react-native';
import Colors from '@styles/colors';
import Star from '@components/atoms/etc/Star';

function StarRating({
  starRating,
  setStarRating,
}: {
  starRating: number;
  setStarRating: (rating: number) => void;
}) {
  const rates = [
    { id: 1, star: 1 },
    { id: 2, star: 2 },
    { id: 3, star: 3 },
    { id: 4, star: 4 },
    { id: 5, star: 5 },
  ];

  const pressHandler = (rating: number) => {
    setStarRating(rating);
  };

  return (
    <View style={styles.container}>
      <View style={styles.stars}>
        {rates.map((rate) => (
          <Pressable key={rate.id} onPress={() => pressHandler(rate.star)}>
            <Star style={starRating >= rate.star && styles.starSelected} />
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 25,
  },
  stars: {
    display: 'flex',
    flexDirection: 'row',
  },
  starSelected: {
    color: Colors.primary,
  },
  message: {
    marginTop: 10,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 15,
    letterSpacing: -0.24,
  },
});

export default StarRating;
