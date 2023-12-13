import DdayBadge from '@components/atoms/Tag/DdayBadge';
import ContentTitles from '@components/molecules/Text/ContentTitles';
import HashTagList from '@components/molecules/etc/HashTagList';
import ContentTimeLocation from '@components/molecules/Text/ContentTimeLocation';
import Separator from '@components/atoms/etc/Separator';
import ContentPrice from '@components/molecules/Text/ContentPrice';
import Colors from '@styles/colors';

function ContentMain() {
  const dummyData = ['Itaewon', 'Seoul', 'Korea'];
  return (
    <>
      <DdayBadge />
      <ContentTitles
        title="Jenny's Seoul tour"
        subtitle="Let's Play Together at Itaewon Street!"
      />
      <HashTagList data={dummyData} />
      <ContentTimeLocation
        time='12/16(Sat) 19:30'
        location='3-11, Jamsil-dong, Songpa-gu, Seoul'
      />
      <Separator color={Colors.lineGray03} hei={1} marginVer={20} />
      <ContentPrice
        price='Free'
        option='(It covers all expenses incurred in the program.)'
      />
      <Separator color={Colors.lineGray05} hei={8} marginVer={20} />
    </>
  );
}

export default ContentMain;
