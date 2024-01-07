import { View, Text, LayoutChangeEvent } from 'react-native';
import { useState } from 'react';
import HeaderSafe from '@/components/atoms/etc/HeaderSafe';
import Spacing from '@/styles/spacing';
import BackLeft from './BackLeft';
import SearchNotificationRight from './SearchNotificationRight';
import Colors from '@/styles/colors';

export default function CategoryHeader({ title }: { title: string }) {
  const [rightWraptWidth, setRightWraptWidth] = useState(0);

  const themeColor = 'white';

  const onLayout = (event: LayoutChangeEvent) => {
    const { width } = event.nativeEvent.layout;
    setRightWraptWidth(width);
  };
  return (
    <View style={{ backgroundColor: Colors.primary }}>
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
        <View style={{ width: rightWraptWidth }}>
          <BackLeft theme={themeColor} />
        </View>
        {/* center */}
        <Text
          style={{
            color: themeColor,
            fontFamily: 'Montserrat-ExtraBold',
            fontSize: 20,
          }}
        >
          {title}
        </Text>
        {/* right */}
        <View onLayout={onLayout}>
          <SearchNotificationRight theme={themeColor} />
        </View>
      </View>
    </View>
  );
}
