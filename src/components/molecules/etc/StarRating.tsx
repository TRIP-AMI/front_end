import { StyleSheet, View, Pressable } from 'react-native';
import { useState } from 'react';
import Colors from '@styles/colors';
import Star from '@components/atoms/etc/Star';

function StarRating() {
  const [starRating, setstarRating] = useState(0);

  return (
    <View style={styles.container}>
      <View style={styles.stars}>
        <Pressable onPress={() => setstarRating(1)}>
          <Star style={starRating >= 1 && styles.starSelected} />
        </Pressable>
        <Pressable onPress={() => setstarRating(2)}>
          <Star style={starRating >= 2 && styles.starSelected} />
        </Pressable>
        <Pressable onPress={() => setstarRating(3)}>
          <Star style={starRating >= 3 && styles.starSelected} />
        </Pressable>
        <Pressable onPress={() => setstarRating(4)}>
          <Star style={starRating >= 4 && styles.starSelected} />
        </Pressable>
        <Pressable onPress={() => setstarRating(5)}>
          <Star style={starRating >= 5 && styles.starSelected} />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
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
