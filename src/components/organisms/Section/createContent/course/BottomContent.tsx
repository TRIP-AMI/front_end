import { FontAwesome5, Fontisto } from '@expo/vector-icons';
import { View } from 'react-native';

import ContentCreateTimeInput from '@/components/molecules/Input/ContentCreateTimeInput';

export default function BottomContent({
  distance,
  walkingTime,
  carTime,
  distanceChange,
  walkingTimeChange,
  carTimeChange,
}: {
  distance: string;
  walkingTime: string;
  carTime: string;
  distanceChange: (value: string) => void;
  walkingTimeChange: (value: string) => void;
  carTimeChange: (value: string) => void;
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <ContentCreateTimeInput
        value={distance}
        onChangeText={distanceChange}
        text='km'
      />
      <ContentCreateTimeInput
        value={walkingTime}
        onChangeText={walkingTimeChange}
        text='minutes'
        icon={<FontAwesome5 name='walking' size={16} color='#7A7A7A' />}
      />
      <ContentCreateTimeInput
        value={carTime}
        onChangeText={carTimeChange}
        text='minutes'
        icon={<Fontisto name='car' size={16} color='#7A7A7A' />}
      />
    </View>
  );
}
