import { useRef, useState } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';
import DropToggleTitle from '@components/molecules/Text/DropToggleTitle';
import Colors from '@styles/colors';
import Spacing from '@/styles/spacing';

interface DropToggleProps {
  title: string;
  content: string;
  lastIndex?: boolean;
  date?: string;
  contentDate?: string | null;
  isInquiry?: boolean;
}

export default function DropToggle({
  title,
  content,
  lastIndex,
  date,
  contentDate,
  isInquiry,
}: DropToggleProps) {
  const [isActive, setIsActive] = useState(false);

  const activePossible = !(contentDate === null) || !isInquiry;
  const animationFade = useRef(new Animated.Value(0)).current;
  const animationRotate = useRef(new Animated.Value(0)).current;

  const handleToggle = () => {
    if (!activePossible) return;
    setIsActive((prev) => !prev);
  };

  return (
    <View style={[styles.container, lastIndex && { borderBottomWidth: 0 }]}>
      {/* title */}
      <DropToggleTitle
        title={title}
        date={date}
        isInquiry={isInquiry}
        isCompleted={!(contentDate === null) || !isInquiry}
        isActive={isActive}
        handleToggle={handleToggle}
        animationFade={animationFade}
        animationRotate={animationRotate}
      />
      {/* content */}
      <Animated.View style={[{ opacity: animationFade }]}>
        {isActive && (
          <View style={[styles.content]}>
            {isInquiry && contentDate !== null && (
              <Text style={styles.date}>{contentDate}</Text>
            )}
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
  date: {
    color: Colors.fontGray07,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.24,
    marginBottom: 10,
  },
});
