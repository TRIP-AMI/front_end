import { View, Pressable, Text, StyleSheet } from 'react-native';
import { useState } from 'react';
import Colors from '@styles/colors';
import SearchTitle from '@components/atoms/Text/SearchTitle';

function SearchTopProgram() {
  const [topProgramList] = useState([
    {
      id: Math.random(),
      label: "Jenny's Itaewon tour",
    },
    {
      id: Math.random(),
      label: "Jenny's Itaewon tour",
    },
    {
      id: Math.random(),
      label: "Jenny's Itaewon tour",
    },
    {
      id: Math.random(),
      label: "Jenny's Itaewon tour",
    },
    {
      id: Math.random(),
      label: "Jenny's Itaewon tour",
    },
  ]);

  const onPressProgram = () => {};
  return (
    <View>
      <SearchTitle style={{ marginTop: 30 }}>Top 5 Program</SearchTitle>
      <Text
        style={[style.textTitleSub, { marginTop: 6, marginBottom: 20 - 12.5 }]}
      >
        The most requested AMI on the last 3 days.
      </Text>

      {topProgramList.map((program, i) => {
        return (
          <Pressable
            key={program.id}
            onPress={onPressProgram}
            style={style.programWrap}
          >
            <Text
              style={{
                color: Colors.main,
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
    color: Colors.titleBlack,
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
