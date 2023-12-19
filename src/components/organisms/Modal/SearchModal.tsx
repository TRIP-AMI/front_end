import SearchInput from '@components/molecules/Input/SearchInput';
import SearchRecommeded from '@components/molecules/etc/SearchRecommeded';
import SearchTopProgram from '@components/molecules/etc/SearchTopProgram';
import BasicFullScreenModal from '@components/atoms/Modal/BasicFullScreenModal';
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Spacing from '@/styles/spacing';

function SearchModal() {
  return (
    <BasicFullScreenModal>
      <StatusBar style='auto' />
      <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
        {/* search input */}
        <SearchInput />
        {/* recommeded keywords */}
        <SearchRecommeded />
        {/* top 5 program */}
        <SearchTopProgram />
      </View>
    </BasicFullScreenModal>
  );
}

export default SearchModal;
