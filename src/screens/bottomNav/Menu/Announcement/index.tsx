import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import Spacing from '@/styles/spacing';
import { RootStackParamList } from '@/types/NavigationTypes';

// data title 영어로 바꿔줘야함
const data = [
  {
    id: 1,
    title: `Do this when you can't verify your e-mail`,
  },
  {
    id: 2,
    title: 'Booking Announcement Booking Announcement Booking Announcement',
  },
  {
    id: 3,
    title: `훈민정음 해례본]은 세종이 직접 서문을 쓰고 정인지 같은 신하들에게 글자에 대한 설명을 적게 한 것입니다.  이 책이 1940년에 안동에서 발견될 때까지 우리는 한글의 창제 원리에 대해 전혀 모르고 있었습니다. 
    그러다 이 책이 발견됨으로 해서 한글이 얼마나 과학적인 원리로 만들어졌는지 알게 되었답니다. 
    이 책이 우리에게 전해진 것은 전적으로 성북동에 있는 간송미술관을 세운 전형필 선생의 공입니다. 
    선생은 아주 비싼 가격으로 이 책을 샀고 6∙25 때에도 이 책 한 권만 들고 피난 갈 정도로 이 책을 지키기 위해 몸을 바친 분입니다. 
    이 분도 [직지]를 세계에 알린 박병선 선생처럼 우리의 문화영웅입니다.
    [네이버 지식백과] 한글 - 세상에서 가장 신비한 문자 (위대한 문화유산, 최준식)
    출처: https://d-dual.tistory.com/31 [🧚🏻 D_Dual Dev Blog🧚🏻:티스토리]`,
  },
  {
    id: 4,
    title: 'Notice 4',
  },
  {
    id: 5,
    title: 'Notice 5',
  },
];

type AnnouncementScreenProps = StackScreenProps<
  RootStackParamList,
  'Announcement'
>;

export default function AnnouncementScreen({
  navigation,
}: AnnouncementScreenProps) {
  const handlePress = (id: number) => {
    navigation.navigate('AnnouncementDetail', { announcementId: id });
  };
  return (
    <View style={styles.container}>
      <ScrollView>
        {data.map((item) => {
          return (
            <Pressable
              key={item.id}
              style={styles.itemWrap}
              onPress={() => {
                handlePress(item.id);
              }}
            >
              <Text style={styles.title} numberOfLines={2} ellipsizeMode='tail'>
                {item.title}
              </Text>
            </Pressable>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 5,
    backgroundColor: '#fff',
  },
  itemWrap: {
    borderBottomWidth: 1,
    borderBottomColor: '#ECECEC',
    paddingVertical: 20,
    paddingHorizontal: Spacing.IOS392Margin,
  },
  title: {
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    lineHeight: 18,
  },
});
