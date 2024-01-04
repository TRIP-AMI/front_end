import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import TextTitle from '@/components/atoms/Text/TextTitle';
import Spacing from '@/styles/spacing';
import TextButton from '@/components/atoms/Button/TextButton';
import ReviewItemList from '@/components/organisms/Section/ReviewItemList';
import useReview from '@/hooks/reviewHook';

export default function ContentReview() {
  const [viewAll, setViewAll] = useState(false);
  const { reviews } = useReview();

  const onPress = () => {
    setViewAll(!viewAll);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TextTitle style={styles.title}>Review</TextTitle>
        {reviews.length > 0 && (
          <TextButton
            title={viewAll ? 'Hide' : 'More'}
            style={styles.button}
            onPress={onPress}
          />
        )}
      </View>
      {reviews.length > 0 ? (
        <ReviewItemList
          data={viewAll ? reviews : reviews.slice(0, 1)}
          scrollEnabled={false}
          emptyText='There are no reviews.'
        />
      ) : (
        <Text style={styles.text}> There are no reviews.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingBottom: 22,
    paddingHorizontal: Spacing.IOS392Margin,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 15,
  },
  title: {
    color: '#000000',
    fontSize: 18,
    fontFamily: 'Montserrat-Bold',
    letterSpacing: -0.36,
  },
  text: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.32,
    lineHeight: 20,
    paddingBottom: 8,
  },
  button: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    lineHeight: 30,
    color: '#77787A',
  },
});
