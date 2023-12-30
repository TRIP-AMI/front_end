import BlackBadge from '@components/atoms/Tag/BlackBadge';
import ContentTitles from '@components/molecules/Text/ContentTitles';
import HashTagList from '@components/molecules/etc/HashTagList';
import ContentTimeLocation from '@components/molecules/Text/ContentTimeLocation';
import ContentPrice from '@components/molecules/Text/ContentPrice';
import Colors from '@styles/colors';
import { StyleSheet, View } from 'react-native';
import Spacing from '@styles/spacing';
import SectionDividerBar from '@/components/atoms/etc/SectionDividerBar';

function ContentMain() {
  const dummyData = ['Itaewon', 'Seoul', 'Korea'];
  return (
    <>
      <View style={{ paddingVertical: 20 }}>
        <View style={styles.container}>
          <BlackBadge text='D-1' />
        </View>
        <ContentTitles
          title="Jenny's Seoul tour"
          subtitle="Let's Play Together at Itaewon Street!"
        />
        <HashTagList data={dummyData} />
        <ContentTimeLocation
          time='12/16(Sat) 19:30'
          location='3-11, Jamsil-dong, Songpa-gu, Seoul'
        />
      </View>
      <SectionDividerBar
        style={{ backgroundColor: Colors.lineGray03, height: 1 }}
      />
      <ContentPrice
        price='Free'
        option='(It covers all expenses incurred in the program.)'
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 8,
    paddingLeft: Spacing.IOS392Margin,
  },
});

export default ContentMain;
