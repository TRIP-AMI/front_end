import { Pressable, StyleSheet, Text, View } from 'react-native';
import Colors from '@styles/colors';
import Spacing from '@styles/spacing';
import { MaterialIcons } from '@expo/vector-icons';
import { Badge } from 'react-native-paper';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MyPageStackNavigationProp } from '@/navigations/MainBottomNavTab/MyPage/MyPageStack';

// TODO Badge 색상 Colors.Primary로 변경해야 함
function ApplicantButton() {
  const [alarmCount] = useState(1);
  const alarmBadgeShow = alarmCount > 0;

  const navigation = useNavigation<MyPageStackNavigationProp>();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('ApplicationDetails');
      }}
      style={styles.container}
    >
      <View style={styles.subContainer}>
        <Text style={styles.text}>Applicant History</Text>
        <View style={styles.iconContainer}>
          <MaterialIcons name='arrow-forward-ios' size={16} color='#A1A5AE' />
        </View>
        <Badge size={7} visible={alarmBadgeShow} style={styles.badge} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderRadius: 5,
    justifyContent: 'center',
    backgroundColor: Colors.second,
    marginHorizontal: Spacing.IOS392Margin,
    marginBottom: 20,
  },
  subContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    width: 22,
    padding: 5,
  },
  text: {
    color: Colors.fontGray01,
    fontFamily: 'Montserrat-Medium',
    fontSize: 16,
    lineHeight: 18,
    letterSpacing: -0.32,
  },
  badge: {
    position: 'absolute',
    top: 3,
    left: 75,
  },
});

export default ApplicantButton;
