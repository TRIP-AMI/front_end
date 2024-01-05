import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Spacing from '@styles/spacing';
import Colors from '@styles/colors';
import EditNameInput from '@components/organisms/Input/EditNameInput';
import { useState } from 'react';
import EditProfileImg from '@components/molecules/Item/EditProfileImg';

function EditProfileScreen() {
  // TODO API 연결해서 유저 데이터 받아오고 수정학
  const [userName, setUserName] = useState('Jenny');
  const [imgUrl, setImgUrl] = useState(
    'https://geographical.co.uk/wp-content/uploads/panda1200-1.jpg',
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.marginContainer}>
        <View style={styles.img}>
          <EditProfileImg imgUrl={imgUrl} setImgUrl={setImgUrl} />
        </View>
        <Text style={styles.title}>Name</Text>
        <Text style={styles.content}>No more than 12 characters.</Text>
        <EditNameInput userName={userName} setUserName={setUserName} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  marginContainer: {
    marginHorizontal: Spacing.IOS392Margin,
  },
  img: {
    marginBottom: 30,
    marginTop: 20,
  },
  title: {
    color: 'black',
    fontSize: 16,
    fontFamily: 'Montserrat-SemiBold',
    lineHeight: 15,
    marginBottom: 8,
  },
  content: {
    color: Colors.fontGray03,
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    letterSpacing: -0.24,
    lineHeight: 15,
    marginBottom: 20,
  },
});

export default EditProfileScreen;
