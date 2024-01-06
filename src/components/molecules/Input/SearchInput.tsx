import { View, TextInput, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import Colors from '@styles/colors';

function SearchInput({
  onShearch,
}: {
  onShearch: (inputValue: string) => void;
}) {
  const [text, setText] = useState('');

  const onSubmitEditing = () => {
    onShearch(text);
  };
  return (
    <View style={style.searchWrap}>
      <AntDesign name='search1' size={18} color={Colors.primary} />
      <TextInput
        style={style.searchInput}
        placeholder='What kind of trip do you want?'
        onChangeText={setText}
        defaultValue={text}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
}

const style = StyleSheet.create({
  searchWrap: {
    flexDirection: 'row',
    borderColor: '#ECECEC',
    borderWidth: 1,
    borderRadius: 30,
    paddingVertical: 18,
    paddingHorizontal: 14,
    shadowColor: '#0000001C',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 3,
    backgroundColor: '#fff',
  },
  searchInput: {
    marginLeft: 8,
  },
});

export default SearchInput;
