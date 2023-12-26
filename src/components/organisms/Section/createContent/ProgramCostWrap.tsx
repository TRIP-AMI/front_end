import { View, Text, StyleSheet } from 'react-native';
import { Control, useController } from 'react-hook-form';
import Checkbox from 'expo-checkbox';
import BasicInput from '@/components/atoms/Input/BasicInput';
import ContentInputWrap from '@/components/molecules/Input/ContentInputWrap';
import { ProgramCostType } from '@/hooks/uploadHook';
import Colors from '@/styles/colors';
import { extractNumbers } from '@/utils/functions';

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
    field: { value: costValue, onChange: costTextChange },
  } = useController({ control, name: 'programCost' });
  const {
    field: { value: costTypeValue, onChange: costTypeChange },
  } = useController({ control, name: 'programCostType' });

  const handleCostChange = (str: string) => {
    costTextChange(extractNumbers(str));
  };

  return (
    <ContentInputWrap
      title='Program Cost (Korean won)'
      content={
        <View>
          <BasicInput
            value={costValue}
            onChangeText={handleCostChange}
            placeholder='Enter only numbers.'
            keyboardType='numeric'
          />
          <View style={styles.checkboxListViewWrap}>
            {costTypeList.map((item) => {
              return (
                <View key={item.id} style={styles.checkboxWrap}>
                  <Checkbox
                    value={costTypeValue === item.id}
                    onValueChange={() => {
                      costTypeChange(item.id);
                    }}
                    color={Colors.primary}
                    style={{ borderWidth: 1 }}
                  />
                  <Text style={styles.checkboxLabel}>{item.label}</Text>
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
  checkboxWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 25,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
  },
});
