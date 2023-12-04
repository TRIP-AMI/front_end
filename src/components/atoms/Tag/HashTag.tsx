import { ReactNode } from 'react';
import {
  Text,
  StyleProp,
  StyleSheet,
  TextStyle,
  PixelRatio,
} from 'react-native';

function HashTag({
  children,
  style,
}: {
  children: ReactNode;
  // eslint-disable-next-line react/require-default-props
  style?: StyleProp<TextStyle> | undefined;
}) {
  return <Text style={[styles.tag, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  tag: {
    marginRight: 5,
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 18,
    textAlign: 'center',
    // TODO 글씨 길이에 따라 width가 달라지게 하기
    width: PixelRatio.getPixelSizeForLayoutSize(30),
  },
});

export default HashTag;
