import BasicCheckModal from '@components/atoms/Modal/BasicCheckModal';
import BasicModalText from '@components/atoms/Text/BasicModalText';
import { useRecoilValue } from 'recoil';
import userState from '@utils/recoil/user';
import { Text, Pressable, StyleSheet, View } from 'react-native';
import Colors from '@styles/colors';
import * as Clipboard from 'expo-clipboard';

function ApplicantInfoModal() {
  // TODO Ami: 신청한 ourist 정보 출력 | tourist: 신청한 프로그램의 AMI 정보 출력
  const userData = useRecoilValue(userState);

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(userData.email);
  };

  return (
    <BasicCheckModal onCheck={() => {}} buttonText='Cancel'>
      <BasicModalText content='Applicant Information' />
      <View style={styles.container}>
        <Text style={styles.name}>{`• Name: ${userData.name}`}</Text>
        <View style={styles.subContainer}>
          <Text style={styles.email}>• E-mail: </Text>
          <Pressable onPress={copyToClipboard}>
            <Text style={styles.clipboard}>{userData.email}</Text>
          </Pressable>
        </View>
      </View>
    </BasicCheckModal>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 14,
    paddingHorizontal: 20,
  },
  subContainer: {
    flexDirection: 'row',
  },
  name: {
    color: Colors.fontGray03,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 20,
  },
  email: {
    color: Colors.fontGray03,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 20,
  },
  clipboard: {
    color: '#3E9FDF',
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    lineHeight: 20,
  },
});

export default ApplicantInfoModal;
