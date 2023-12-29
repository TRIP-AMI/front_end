import { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ContentInputWrapProps {
  title: string;
  subTitle?: string;
  content: ReactNode;
}
export default function ContentInputWrap({
  title,
  subTitle,
  content,
}: ContentInputWrapProps) {
  return (
    <View style={styles.wrap}>
      <Text style={[styles.title, { marginBottom: subTitle ? 4 : 8 }]}>
        {title}
      </Text>
      {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}

      <View>{content}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  wrap: {
    marginBottom: 25,
  },
  title: {
    color: '#000',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 15,
  },
  subTitle: {
    marginBottom: 8,
    color: '#8E8E8E',
    fontFamily: 'Montserrat-Regular',
    fontSize: 12,
    lineHeight: 15,
    letterSpacing: -0.24,
  },
});
