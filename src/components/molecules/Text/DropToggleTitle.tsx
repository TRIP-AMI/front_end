import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import CompletedBadge from '@components/atoms/Badge/CompletedBadge';
import Colors from '@styles/colors';
import { useEffect } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import Spacing from '@styles/spacing';

function DropToggleTitle({
  title,
  isInquiry,
  date,
  isCompleted,
  isActive,
  handleToggle,
  animationFade,
  animationRotate,
}: {
  title: string;
  isInquiry?: boolean;
  date?: string;
  isCompleted: boolean;
  isActive: boolean;
  handleToggle: () => void;
  animationFade: Animated.Value;
  animationRotate: Animated.Value;
}) {
  const rotate = animationRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  useEffect(() => {
    Animated.timing(animationFade, {
      toValue: isActive ? 1 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();

    Animated.spring(animationRotate, {
      toValue: isActive ? 0 : 1,
      useNativeDriver: true,
    }).start();
  }, [isActive, animationFade, animationRotate]);

  return (
    <Pressable onPress={handleToggle} style={styles.pressWrap}>
      {isInquiry && (
        <View style={styles.inquiryContainer}>
          <CompletedBadge isCompleted={isCompleted} />
          <Text style={styles.date}>{date}</Text>
        </View>
      )}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        {isCompleted && (
          <Animated.View
            style={{
              transform: [
                {
                  rotate,
                },
              ],
            }}
          >
            <FontAwesome name='angle-down' size={24} color='black' />
          </Animated.View>
        )}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  inquiryContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  titleContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  pressWrap: {
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 18,
    paddingHorizontal: Spacing.IOS392Margin,
  },
  title: {
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.28,
  },
  date: {
    color: Colors.fontGray07,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.24,
  },
});

export default DropToggleTitle;
