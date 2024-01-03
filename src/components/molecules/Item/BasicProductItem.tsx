import { View, Text, StyleSheet } from 'react-native';
import dayjs from 'dayjs';
import BasicItem from '@/types/basicItem';
import BasicProductItemTitle from '@/components/atoms/Text/BasicProductItemTitle';
import BasicProductItemSubTitle from '@/components/atoms/Text/BasicProductItemSubTitle';
import BasicProductItemImg from '@/components/atoms/Image/BasicProductItemImg';
import LikeHeart from '@/components/atoms/Lottie/LikeHeart';
import Colors from '@/styles/colors';
import BlackBadge from '@/components/atoms/Tag/BlackBadge';

function LastDateBadge({ date }: { date: Date }) {
  const now = dayjs();

  if (dayjs(date).diff(now, 'day') !== 0) {
    return null;
  }

  return (
    <View style={{ width: '23%', marginBottom: 5 }}>
      <BlackBadge text='D-1' />
    </View>
  );
}

export default function BasicProductItem({
  basicItem,
  setList,
}: {
  basicItem: BasicItem;
  setList?: React.Dispatch<React.SetStateAction<BasicItem[]>>;
}) {
  const dateFormat = dayjs(basicItem.itemDate).format('MM/DD(MMM) HH:mm');

  const updateLikeValue = (value: boolean) => {
    if (setList) {
      const updateList = (prev: BasicItem[]): BasicItem[] => {
        const copy = [...prev];
        return copy.map((item) => {
          if (item.itemId === basicItem.itemId) {
            return {
              ...item,
              itemLike: value,
            };
          }
          return item;
        });
      };
      setList(updateList);
    }
  };

  return (
    <View style={styles.basicItemWrap}>
      <View style={styles.imgWrap}>
        <BasicProductItemImg planUri={basicItem.itemImg}>
          {basicItem.itemLike !== undefined && (
            <LikeHeart
              likeValue={basicItem.itemLike}
              updateValue={updateLikeValue}
            />
          )}
        </BasicProductItemImg>
      </View>
      <View>
        <LastDateBadge date={basicItem.itemDate} />
        <BasicProductItemTitle style={{ marginBottom: 1 }}>
          {basicItem.itemTitle}
        </BasicProductItemTitle>
        <BasicProductItemSubTitle>
          {basicItem.itemSubTitle}
        </BasicProductItemSubTitle>
        <Text
          style={{
            color: Colors.primary,
            fontFamily: 'Montserrat-SemiBold',
            fontSize: 14,
            lineHeight: 18,
            letterSpacing: -0.28,
          }}
        >
          {dateFormat}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  basicItemWrap: {
    width: '48.5%',
    marginBottom: 20,
  },
  imgWrap: {
    width: '100%',
    height: 161,
    marginBottom: 8,
    borderRadius: 5,
    overflow: 'hidden',
  },
});
