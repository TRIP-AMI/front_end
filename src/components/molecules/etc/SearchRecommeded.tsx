import { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import SearchTitle from '@components/atoms/Text/SearchTitle';
import PressHashTag from '@components/atoms/Tag/PressHashTag';

function SearchRecommeded() {
  const [tagList] = useState([
    {
      id: 1,
      label: 'Activity',
    },
    {
      id: 2,
      label: 'Restaurant',
    },
    {
      id: 3,
      label: 'Tourism',
    },
    {
      id: 4,
      label: 'Photo',
    },
    {
      id: 5,
      label: 'K-POP',
    },
    {
      id: 6,
      label: 'Shopping',
    },
  ]);
  return (
    <View>
      <SearchTitle style={{ marginTop: 30 }}>Recommended keywords</SearchTitle>
      <ScrollView horizontal style={style.tagWrap}>
        {tagList.map((tag) => {
          return (
            <PressHashTag
              key={tag.id}
              label={tag.label}
              style={{ marginRight: 5 }}
            />
          );
        })}
      </ScrollView>
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
