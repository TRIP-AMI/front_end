import { View, Text, LayoutChangeEvent } from 'react-native';
import { useState } from 'react';
import HeaderSafe from '@/components/atoms/etc/HeaderSafe';
import Spacing from '@/styles/spacing';
import Fonts from '@/styles/typography';
import BackLeftArrow from './BackLeftArrow';

export default function LeftBackCenterTitle({ title }: { title: string }) {
  const [leftIconWidth, setLeftIconWidth] = useState(0);

  const onLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setLeftIconWidth(width);
  };

  return (
    <View style={{ backgroundColor: '#fff' }}>
      {/* safe */}
      <HeaderSafe />
      {/* content */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingVertical: 11,
          paddingHorizontal: Spacing.IOS392Margin,
        }}
      >
        {/* left */}
        <View onLayout={onLayout}>
          <BackLeftArrow />
        </View>
        {/* center */}
        <Text style={[Fonts.header.title]}>{title}</Text>
        {/* right */}
        <View style={{ width: leftIconWidth }} />
      </View>
    </View>
  );
}
