import { View } from 'react-native';

import SampleAtomInput from '@components/atoms/Sample/SampleAtomInput';
import SampleAtomButton from '@components/atoms/Sample/SampleAtomButton';

function SampleMolecules() {
  const getValue = (value: string) => {
    console.log('input value ::', value);
    return value;
  };
  return (
    <View>
      <SampleAtomInput getValue={getValue} />
      <SampleAtomButton title='중복확인' />
    </View>
  );
}

export default SampleMolecules;
