import { View, Text, StyleSheet } from 'react-native';
import { Control, useController } from 'react-hook-form';
import Checkbox from 'expo-checkbox';
import BasicInput from '@/components/atoms/Input/BasicInput';
import ContentInputWrap from '@/components/molecules/Input/ContentInputWrap';
import { ProgramCostType } from '@/hooks/uploadHook';

const costTypeList: {
  id: ProgramCostType;
  label: string;
}[] = [
  {
    id: 'GUIDE',
    label: 'Guide fee only',
  },
  {
    id: 'ALL',
    label: 'Program cost all',
  },
];

export default function ProgramCostWrap({
  control,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
}) {
  const {
    field: { onChange: costTextChange },
  } = useController({ control, name: 'programCost' });
  const {
    field: { value: costTypeValue, onChange: costTypeChange },
  } = useController({ control, name: 'programCostType' });

  return (
    <ContentInputWrap
      title='Program Cost (Korean won)'
      content={
        <View>
          <BasicInput
            onChangeText={costTextChange}
            placeholder='Enter only numbers.'
          />
          <View style={styles.checkboxListViewWrap}>
            {costTypeList.map((item) => {
              return (
                <View
                  key={item.id}
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginRight: 25,
                  }}
                >
                  <Checkbox
                    value={costTypeValue === item.id}
                    onValueChange={() => {
                      costTypeChange(item.id);
                    }}
                  />
                  <Text style={{ marginLeft: 8 }}>{item.label}</Text>
                </View>
              );
            })}
          </View>
        </View>
      }
    />
  );
}

const styles = StyleSheet.create({
  checkboxListViewWrap: {
    flexDirection: 'row',
    marginTop: 15,
  },
});
