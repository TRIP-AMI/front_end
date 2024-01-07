import { View, Text } from 'react-native';
import SwitchButton from '@/components/atoms/Button/SwitchButton';
import Fonts from '@/styles/typography';

export default function HomeHeaderLeft() {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Text style={[Fonts.header.logo, { marginRight: 5 }]}>TRIPAMI</Text>
      <SwitchButton />
    </View>
  );
}
