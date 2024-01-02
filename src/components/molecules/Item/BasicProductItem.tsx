import { View, Text, StyleSheet } from 'react-native';
import dayjs from 'dayjs';
import BasicItem from '@/types/basicItem';
import BasicProductItemTitle from '@/components/atoms/Text/BasicProductItemTitle';
import BasicProductItemSubTitle from '@/components/atoms/Text/BasicProductItemSubTitle';
import BasicProductItemImg from '@/components/atoms/Image/BasicProductItemImg';
import LikeHeart from '@/components/atoms/Lottie/LikeHeart';
import Colors from '@/styles/colors';

export default function BasicProductItem({
  basicItem,
}: {
  basicItem: BasicItem;
}) {
  const dateFormat = dayjs(basicItem.itemDate).format('MM/DD(MMM)');
  return (
    <View style={styles.basicItemWrap}>
      <View style={styles.imgWrap}>
        <BasicProductItemImg planUri={basicItem.itemImg}>
          <LikeHeart />
        </BasicProductItemImg>
      </View>
      <View>
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
