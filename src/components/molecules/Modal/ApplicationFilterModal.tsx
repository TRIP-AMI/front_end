import { Dimensions, Pressable, StyleSheet, Text, View } from 'react-native';
import BasicBottomModal from '@components/atoms/Modal/BasicBottomModal';
import Spacing from '@styles/spacing';
import Colors from '@styles/colors';
import FilterHeaderButton from '@components/atoms/Button/FilterHeaderButton';

function ApplicationFilterModal() {
  return (
    <BasicBottomModal
      header={<FilterHeaderButton />}
      onDismiss={() => {}}
      modalViewStyle={{ height: '38%' }}
    >
      <View style={styles.container}>
        <Pressable
          style={[
            styles.filterContainer,
            { backgroundColor: Colors.fontGray08 },
          ]}
        >
          <Text style={styles.filterText}>View All</Text>
        </Pressable>
        <Pressable
          style={[
            styles.filterContainer,
            false && { backgroundColor: Colors.fontGray08 },
          ]}
        >
          <Text style={styles.filterText}>Only New</Text>
        </Pressable>
        <Pressable
          style={[
            styles.filterContainer,
            false && { backgroundColor: Colors.fontGray08 },
          ]}
        >
          <Text style={styles.filterText}>Only Last</Text>
        </Pressable>
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
