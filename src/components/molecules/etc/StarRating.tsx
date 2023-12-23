import { StyleSheet, View, Pressable } from 'react-native';
import { useState } from 'react';
import Colors from '@styles/colors';
import Star from '@components/atoms/etc/Star';

function StarRating() {
  const [starRating, setstarRating] = useState(0);
  const rates = [
    { id: 1, star: 1 },
    { id: 2, star: 2 },
    { id: 3, star: 3 },
    { id: 4, star: 4 },
    { id: 5, star: 5 },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.stars}>
        {rates.map((rate) => (
          <Pressable key={rate.id} onPress={() => setstarRating(rate.star)}>
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
});

export default StarRating;
