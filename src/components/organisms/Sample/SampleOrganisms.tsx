import { View } from 'react-native';

import SampleMolecules from '@components/molecules/Sample/SampleMolecules';
import SampleAtomButton from '@components/atoms/Sample/SampleAtomButton';

function SampleOrganisms() {
  return (
    <View>
      <SampleMolecules />
      <View>
        <SampleAtomButton title='회원가입' />
      </View>
    </View>
  );
}

export default SampleOrganisms;
