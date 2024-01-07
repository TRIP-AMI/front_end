import { View } from 'react-native';
import Spacing from '@/styles/spacing';
import HomeHeaderLeft from './HomeHeaderLeft';
import SearchNotificationRight from './SearchNotificationRight';
import HeaderSafe from '@/components/atoms/etc/HeaderSafe';

export default function HomeHeader() {
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
        <HomeHeaderLeft />
        {/* right */}
        <SearchNotificationRight />
      </View>
    </View>
  );
}
