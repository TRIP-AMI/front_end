import { View, StyleSheet } from 'react-native';
import LikeButtonBox from '@/components/molecules/etc/LikeButtonBox';
import StyledButton from '@/components/atoms/Button/StyledButton';

export default function ContentButtons() {
  return (
    <View style={styles.container}>
      <LikeButtonBox />
      <StyledButton type='medium' content='Apply' active onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: 66,
    paddingVertical: 8,
    paddingHorizontal: 24,
  },
});
