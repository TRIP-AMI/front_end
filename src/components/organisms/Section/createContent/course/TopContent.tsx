import { View, Pressable } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import ContentCreateTimeInput from '@/components/molecules/Input/ContentCreateTimeInput';

export default function TopContent({
  requiredTimeValue,
  requiredTimeValueChange,
  index,
  programId,
  deleteProgram,
}: {
  requiredTimeValue: string;
  requiredTimeValueChange: (id: string, value: string) => void;
  index: number;
  programId: string;
  deleteProgram: (id: string) => void;
}) {
  const onChangeText = (value: string) => {
    requiredTimeValueChange(programId, value);
  };

  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <ContentCreateTimeInput
        value={requiredTimeValue}
        onChangeText={onChangeText}
        text='hours (Required Time)'
      />
      {index !== 0 && (
        <Pressable
          onPress={() => {
            deleteProgram(programId);
          }}
        >
          <Octicons name='x-circle-fill' size={18} color='#ccc' />
        </Pressable>
      )}
    </View>
  );
}
