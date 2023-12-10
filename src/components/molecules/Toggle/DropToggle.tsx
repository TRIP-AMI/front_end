import { useEffect, useRef, useState } from 'react';
import { View, Text, Pressable, StyleSheet, Animated } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Spacing from '@/styles/spacing';

interface DropToggleProps {
  title: string;
  content: string;
}

export default function DropToggle({ title, content }: DropToggleProps) {
  const [isActive, setIsActive] = useState(false);

  const animationFade = useRef(new Animated.Value(0)).current;
  const animationRotate = useRef(new Animated.Value(0)).current;

  const rotate = animationRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  const handleToggle = () => {
    setIsActive((prev) => !prev);
  };

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
    <View style={styles.container}>
      {/* title */}
      <Pressable onPress={handleToggle} style={styles.pressWrap}>
        <Text style={styles.title}>{title}</Text>
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
      </Pressable>
      {/* content */}
      <Animated.View style={[{ opacity: animationFade }]}>
        {isActive && (
          <View style={[styles.content]}>
            <Text style={styles.contentText}>{content}</Text>
          </View>
        )}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderColor: '#EEEEEE',
  },
  pressWrap: {
    flexDirection: 'row',
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
  content: {
    paddingVertical: 20,
    paddingHorizontal: Spacing.IOS392Margin,
    backgroundColor: '#F2F2F2',
  },
  contentText: {
    color: '#000000',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: -0.28,
  },
});
