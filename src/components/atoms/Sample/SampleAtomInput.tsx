import { useState } from 'react';
import { TextInput } from 'react-native';

function SampleAtomInput({
  getValue,
}: {
  getValue: (value: string) => string;
}) {
  const [text, onChangeText] = useState('');

  const handleChange = (value: string) => {
    onChangeText(value);
    getText();
  };

  const getText = () => {
    getValue(text);
  };

  return <TextInput value={text} onChangeText={handleChange} />;
}

export default SampleAtomInput;
