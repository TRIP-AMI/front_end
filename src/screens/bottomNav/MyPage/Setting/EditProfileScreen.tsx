import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Spacing from '@styles/spacing';
import Colors from '@styles/colors';
import EditNameInput from '@components/organisms/Input/EditNameInput';

function EditProfileScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.marginContainer}>
        <Text style={styles.title}>Name</Text>
        <Text style={styles.content}>No more than 12 characters.</Text>
        <EditNameInput />
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
  },
  button: {
    width: '24.3%',
  },
});

export default EditProfileScreen;
