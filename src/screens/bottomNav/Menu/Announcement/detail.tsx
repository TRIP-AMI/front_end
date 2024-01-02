import { StackScreenProps } from '@react-navigation/stack';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { RootStackParamList } from '@/navigations';
import Spacing from '@/styles/spacing';

type AnnouncementDetailScreenProps = StackScreenProps<
  RootStackParamList,
  'AnnouncementDetail'
>;

const data = {
  id: 1,
  title: `Do this when you can't verify your e-mail`,
  content: `Jennie’s Itaewon program application has been completed
    Jennie’s Itaewon program application has been completed
    Jennie’s Itaewon program application has been completed
    Jennie’s Itaewon program application has been completed
    Jennie’s Itaewon program application has been completed
  `,
};

export default function AnnouncementDetailScreen({
  route,
}: AnnouncementDetailScreenProps) {
  console.log(route.params.announcementId);
  // TODO: announcementId를 이용해서 공지사항 상세 정보를 가져온다.

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* title */}
        <Text style={styles.title}>{data.title}</Text>
        {/* content */}
        <View style={styles.contentWrap}>
          <Text style={styles.contentText}>{data.content}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: Spacing.IOS392Margin,
  },
  title: {
    marginTop: 25,
    marginBottom: 15,
    color: '#000000',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    lineHeight: 18,
  },
  contentWrap: {
    paddingTop: 15,
    borderTopWidth: 1,
    borderColor: '#4A4A4A',
  },
  contentText: {
    color: '#4A4A4A',
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    lineHeight: 20,
  },
});
