import { Text, Pressable, StyleSheet, View } from 'react-native';
import { useState } from 'react';
import Spacing from '@styles/spacing';
import Colors from '@styles/colors';
import { Ionicons } from '@expo/vector-icons';
// import { useNavigation } from '@react-navigation/native';

// TODO Ami인지 아닌지 데이터를 불러와서 처리해야 함
function SwitchButton() {
  const [isAmi, setIsAmi] = useState(false);
  // const navigation = useNavigation();

  function changeIsAmi() {
    setIsAmi((current) => !current);
    // navigation.navigate('MyPage', { isAmi: isAmi });
  }

  return (
    <Pressable style={styles.container} onPress={() => changeIsAmi()}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{isAmi ? 'Tourist' : 'Ami'}</Text>
        {/* TODO 나중에 Icon 바꾸기 */}
        <Ionicons
          name='swap-horizontal'
          size={14}
          color='white'
          style={{ marginLeft: 3.32 }}
        />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingLeft: Spacing.IOS392Margin,
  },
  textContainer: {
    flexDirection: 'row',
    paddingVertical: 4,
    paddingHorizontal: 10,
    alignItems: 'center',
    borderRadius: 12,
    backgroundColor: Colors.primary,
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontFamily: 'Montserrat-SemiBold',
    letterSpacing: -0.24,
    lineHeight: 18,
  },
});

export default SwitchButton;
