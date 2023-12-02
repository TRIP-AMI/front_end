import {
  Modal,
  View,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import Spacing from '@styles/spacing';
import Colors from '@styles/colors';

function SearchModal({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) {
  const [text, setText] = useState('');
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

  const onPressTag = () => {};
  const onPressProgram = () => {};

  return (
    <Modal
      animationType='slide'
      transparent={false}
      visible={isVisible}
      presentationStyle='fullScreen'
    >
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-end',
            paddingVertical: 15,
            paddingHorizontal: Spacing.IOS392Margin,
          }}
        >
          <Pressable onPress={onClose}>
            <AntDesign name='close' size={24} color='black' />
          </Pressable>
        </View>
        <View style={{ paddingHorizontal: Spacing.IOS392Margin }}>
          {/* search input */}
          <View style={style.searchWrap}>
            <AntDesign name='search1' size={18} color={Colors.main} />
            <TextInput
              style={style.searchInput}
              placeholder='What kind of trip do you want?'
              onChangeText={(newText) => setText(newText)}
              defaultValue={text}
            />
          </View>
          {/* recommeded keywords */}
          <View>
            <Text style={[style.textTitle, { marginBottom: 20 }]}>
              Recommended keywords
            </Text>
            <View style={style.tagWrap}>
              {tagList.map((tag) => {
                return (
                  <Pressable
                    key={tag.id}
                    onPress={onPressTag}
                    style={style.tag}
                  >
                    <Text style={{ color: '#161616' }}>{tag.label}</Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
          {/* top 5 program */}
          <Text style={[style.textTitle, { marginTop: 30 }]}>
            Top 5 Program
          </Text>
          <Text
            style={[
              style.textTitleSub,
              { marginTop: 6, marginBottom: 20 - 12.5 },
            ]}
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
      </SafeAreaView>
    </Modal>
  );
}

const style = StyleSheet.create({
  searchWrap: {
    flexDirection: 'row',
    borderColor: '#ECECEC',
    borderWidth: 1,
    borderRadius: 30,
    marginBottom: 30,
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
  textTitle: {
    color: Colors.titleBlack,
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    lineHeight: 22,
    letterSpacing: 0,
  },
  tagWrap: {
    flexDirection: 'row',
  },
  tag: {
    marginRight: 5,
    paddingVertical: 8,
    paddingHorizontal: 11,
    borderColor: '#CCCCCC',
    borderWidth: 1,
    borderRadius: 18,
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

export default SearchModal;
