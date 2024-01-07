import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import Colors from '@styles/colors';
import SearchTitle from '@components/atoms/Text/SearchTitle';

const data = [
  {
    id: 1,
    label: "Jenny's Itaewon tour",
  },
  {
    id: 2,
    label: "Jenny's Itaewon tour",
  },
  {
    id: 3,
    label: "Jenny's Itaewon tour",
  },
  {
    id: 4,
    label: "Jenny's Itaewon tour",
  },
  {
    id: 5,
    label: "Jenny's Itaewon tour",
  },
];

function SearchTopProgram() {
  const [topProgramList] = useState(data);

  const onPressProgram = () => {};
  return (
    <View>
      <SearchTitle style={{ marginTop: 30, marginBottom: 15 }}>
        Latest registration program
      </SearchTitle>

      {topProgramList.map((program, i) => {
        return (
          <Pressable
            key={program.id}
            onPress={onPressProgram}
            style={style.programWrap}
          >
            <Text
              style={{
                color: Colors.primary,
                fontSize: 14,
                fontFamily: 'Montserrat-ExtraBold',
                lineHeight: 18,
                letterSpacing: 0.28,
              }}
            >
              {i + 1}
            </Text>
            <Text
              style={{
                marginLeft: 8,
                color: '#292929',
                fontSize: 14,
                fontFamily: 'Montserrat-Bold',
                lineHeight: 18,
                letterSpacing: 0.28,
              }}
            >
              {program.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const style = StyleSheet.create({
  textTitle: {
    color: Colors.fontGray01,
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    lineHeight: 22,
    letterSpacing: 0,
  },
  textTitleSub: {
    color: '#8E8E8E',
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    lineHeight: 16,
  },
  programWrap: {
    flexDirection: 'row',
    paddingVertical: 12.5,
  },
});

export default SearchTopProgram;
