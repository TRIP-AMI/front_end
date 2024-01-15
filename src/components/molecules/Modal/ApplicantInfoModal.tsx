import BasicCheckModal from '@components/atoms/Modal/BasicCheckModal';
import BasicModalText from '@components/atoms/Text/BasicModalText';
import { useRecoilValue } from 'recoil';
import userState from '@utils/recoil/user';
import { Text, StyleSheet, View } from 'react-native';
import Colors from '@styles/colors';
import ClipboardText from '@components/atoms/Text/ClipboardText';
import useModalHook from '@hooks/modalHook';
import profileType from '@utils/recoil/profile';

function ApplicantInfoModal() {
  // TODO Ami: 신청한 tourist 정보 출력 | tourist: 신청한 프로그램의 AMI 정보 출력
  const userData = useRecoilValue(userState);
  const profile = useRecoilValue(profileType);
  const { resetModal } = useModalHook();

  return (
    <BasicCheckModal onCheck={resetModal} buttonText='Cancel'>
      <BasicModalText
        content={
          profile === 'AMI' ? 'Applicant Information' : 'AMI Information'
        }
      />
      <View style={styles.container}>
        <Text style={styles.name}>
          {profile === 'AMI'
            ? `• Name: ${userData.nickname}`
            : `• AMI: ${userData.nickname}`}
        </Text>
        <View style={styles.subContainer}>
          <Text style={styles.email}>• E-mail: </Text>
          <ClipboardText text={userData.email} />
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
});

export default ApplicantInfoModal;
