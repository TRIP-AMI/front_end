import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import BasicBottomModal from '@components/atoms/Modal/BasicBottomModal';
import Spacing from '@styles/spacing';
import Colors from '@styles/colors';
import FilterHeaderButton from '@components/atoms/Button/FilterHeaderButton';
import { ApplicationFilterProps } from '@/types/ModalTypes';

function ApplicationFilterModal({
  category,
  onChange,
}: ApplicationFilterProps) {
  const filterCategory = [
    { title: 'View All', onPress: () => onChange('View All') },
    { title: 'Only New', onPress: () => onChange('Only New') },
    { title: 'Only Last', onPress: () => onChange('Only Last') },
  ];

  return (
    <BasicBottomModal
      header={<FilterHeaderButton />}
      onDismiss={() => {}}
      modalViewStyle={{ height: '35%' }}
    >
      <View style={styles.container}>
        {filterCategory.map((item) => (
          <Pressable
            style={[
              styles.filterContainer,
              item.title === category && { backgroundColor: Colors.fontGray08 },
            ]}
            onPress={item.onPress}
          >
            <Text style={styles.filterText}>{item.title}</Text>
          </Pressable>
        ))}
      </View>
    </BasicBottomModal>
  );
}

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: screenWidth - Spacing.IOS392Margin * 2,
    justifyContent: 'center',
  },
  filterContainer: {
    borderRadius: 5,
  },
  filterText: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Montserrat-Medium',
    lineHeight: 43,
    textAlign: 'center',
  },
  iconContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginHorizontal: Spacing.IOS392Margin,
  },
  buttonContainer: {
    padding: 4,
  },
  pressed: {
    opacity: 0.5,
  },
});

export default ApplicationFilterModal;
