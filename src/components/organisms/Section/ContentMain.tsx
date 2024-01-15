import BlackBadge from '@components/atoms/Tag/BlackBadge';
import ContentTitles from '@components/molecules/Text/ContentTitles';
import HashTagList from '@components/molecules/etc/HashTagList';
import ContentTimeLocation from '@components/molecules/Text/ContentTimeLocation';
import { StyleSheet, View } from 'react-native';
import Spacing from '@styles/spacing';
import dayjs from 'dayjs';

type ContentMainProps = {
  title: string;
  subtitle: string;
  time: Date;
  location: string;
  keywords: string[];
};

function ContentMain({
  title,
  subtitle,
  time,
  keywords,
  location,
}: ContentMainProps) {
  const now = dayjs();
  const diff = dayjs(time).diff(now, 'day');

  return (
    <View style={{ paddingVertical: 20 }}>
      <View style={styles.container}>
        {diff === 1 && <BlackBadge text='D-1' />}
      </View>
      <ContentTitles title={title} subtitle={subtitle} />
      <HashTagList data={keywords} />
      <ContentTimeLocation
        time={dayjs(time).format('MM/DD(ddd) HH:mm')}
        location={location}
      />
    </View>
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
