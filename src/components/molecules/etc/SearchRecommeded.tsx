import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import SearchTitle from '@components/atoms/Text/SearchTitle';
import PressHashTag from '@components/atoms/Tag/PressHashTag';

function SearchRecommeded() {
  const [tagList] = useState([
    {
      id: Math.random(),
      label: '#Itaewon',
    },
    {
      id: Math.random(),
      label: '#Itaewon',
    },
    {
      id: Math.random(),
      label: '#Itaewon',
    },
    {
      id: Math.random(),
      label: '#Itaewon',
    },
    {
      id: Math.random(),
      label: '#Itaewon',
    },
  ]);
  return (
    <View>
      <SearchTitle style={{ marginTop: 30 }}>Recommended keywords</SearchTitle>
      <View style={style.tagWrap}>
        {tagList.map((tag) => {
          return <PressHashTag key={tag.id} label={tag.label} />;
        })}
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  tagWrap: {
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default SearchRecommeded;
