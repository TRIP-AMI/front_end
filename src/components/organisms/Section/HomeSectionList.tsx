import { View } from 'react-native';
import HomeSection from '@components/molecules/ImageList/HomeSection';

import useHomeProgram from '@/hooks/homeProgramHook';

export default function HomeSectionList() {
  const { data } = useHomeProgram();

  return (
    <View style={{ marginBottom: 30 }}>
      {data.map((section) => (
        <HomeSection key={section.title} section={section} />
      ))}
    </View>
  );
}
