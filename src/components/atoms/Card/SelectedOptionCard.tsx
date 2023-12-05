import { Dispatch, SetStateAction } from 'react';
import { View, StyleSheet } from 'react-native';
import { IconButton } from '@components/atoms/IconButton/IconButton';
import StyledText from '@components/atoms/Text/StyledText';
import Colors from '@/styles/colors';
import CountBox from '@/components/molecules/etc/CountBox';

export default function SelectedOptionCard({
  selectedItem,
  setSelectedItem,
}: {
  selectedItem: string;
  setSelectedItem: Dispatch<SetStateAction<string>>;
}) {
  return (
    <View style={{ flex: 1, width: '85%' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <StyledText
            content={selectedItem}
            color='black'
            size={14}
            font='Montserrat-Medium'
          />
          <IconButton
            icon='close-outline'
            size={24}
            color={Colors.fontGray01}
            onPress={() => setSelectedItem('')}
          />
        </View>
        <View style={styles.content}>
          <CountBox />
          <View style={{ flex: 4, alignItems: 'flex-end' }}>
            <StyledText
              content='1,000,000원'
              color='black'
              size={14}
              font='Montserrat-Medium'
            />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F2F2F2',
    height: '40%',
    padding: 10,
  },
  header: {
    flex: 1,

    flexDirection: 'row',
    height: '40%',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontFamily: 'Montserrat-Medium',
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '55%',
  },
});
