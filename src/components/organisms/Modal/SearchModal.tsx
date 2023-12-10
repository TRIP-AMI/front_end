import SearchInput from '@components/molecules/Input/SearchInput';
import SearchRecommeded from '@components/molecules/etc/SearchRecommeded';
import SearchTopProgram from '@components/molecules/etc/SearchTopProgram';
import BasicFullScreenModal from '@components/atoms/Modal/BasicFullScreenModal';

function SearchModal() {
  return (
    <BasicFullScreenModal>
      {/* search input */}
      <SearchInput />
      {/* recommeded keywords */}
      <SearchRecommeded />
      {/* top 5 program */}
      <SearchTopProgram />
    </BasicFullScreenModal>
  );
}

export default SearchModal;
