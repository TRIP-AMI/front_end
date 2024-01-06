import { View, Text } from 'react-native';
import Spacing from '@/styles/spacing';
import Fonts from '@/styles/typography';
import SearchNotificationRight from './SearchNotificationRight';

export default function LeftTitleRightSearchNoti() {
  return (
    <View style={{ backgroundColor: '#fff' }}>
      {/* safe */}
      <View style={{ height: 55 }} />
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
        <Text style={Fonts.header.title}>MENU</Text>
        {/* right */}
        <SearchNotificationRight />
      </View>
    </View>
  );
}
