import { View, Text } from 'react-native';
import Spacing from '@/styles/spacing';
import Fonts from '@/styles/typography';
import SearchNotificationRight from './SearchNotificationRight';
import HeaderSafe from '@/components/atoms/etc/HeaderSafe';

export default function LeftTitleRightSearchNoti({ title }: { title: string }) {
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
        <Text style={Fonts.header.title}>{title}</Text>
        {/* right */}
        <SearchNotificationRight />
      </View>
    </View>
  );
}
