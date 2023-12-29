import { useRecoilValue } from 'recoil';
import { View, StyleSheet } from 'react-native';
import ReviewModal from '@components/organisms/Modal/ReviewModal';
import ApplicationCancel from '@components/molecules/Modal/ApplicationCancel';
import ApplicantInfoModal from '@components/molecules/Modal/ApplicantInfoModal';
import ReviewDetailsModal from '@components/molecules/Modal/ReviewDetailsModal';
import LogoutModal from '@components/molecules/Modal/LogoutModal';
import modalState from '@/utils/recoil/modal';
import NotifcationModal from '@/components/organisms/Modal/NotifcationModal';
import SearchModal from '@/components/organisms/Modal/SearchModal';
import ApplyModal from '@/components/organisms/Modal/ApplyModal';
import ApplyCheckModal from '@/components/molecules/Modal/ApplyCheckModal';
import ApplyCompleteModal from '@/components/organisms/Modal/ApplyCompleteModal';
import LoginInvalidModal from '@/components/molecules/Modal/LoginInvalidModal';
import JoinCancelModal from '@/components/molecules/Modal/JoinCancelModal';
import JoinCompleteModal from '@/components/organisms/Modal/JoinCompleteModal';
import PickerSelectModal from './PickerSelectModal';
import AuthAlertModal from '@/components/molecules/Modal/AuthAlertModal';

export default function ModalProvider() {
  const modal = useRecoilValue(modalState);
  const modalName = modal?.modalName;

  if (!modalName) return null;

  const ModalList: { [key: string]: JSX.Element | undefined } = {
    LOGIN_INVALID: <LoginInvalidModal />,
    JOIN_CANCEL: <JoinCancelModal />,
    JOIN_COMPLETE: modal.title ? (
      <JoinCompleteModal title={modal.title} />
    ) : undefined,
    AUTH_ALERT: <AuthAlertModal />,
    NOTIFICATION: <NotifcationModal />,
    SEARCH: <SearchModal />,
    PICKER_SELECT: <PickerSelectModal />,
    APPLY: <ApplyModal />,
    APPLY_CHECK: modal.applyCheck && (
      <ApplyCheckModal
        date={modal.applyCheck.date}
        user={modal.applyCheck.user}
      />
    ),
    APPLY_COMPLETE: <ApplyCompleteModal />,
    REVIEW: modal?.applicationItem && (
      <ReviewModal
        imgUrl={modal.applicationItem.imgUrl}
        title={modal.applicationItem.title}
      />
    ),
    APPLICATION_CANCEL: <ApplicationCancel />,
    APPLICANT_INFO: <ApplicantInfoModal />,
    REVIEW_DETAIL: <ReviewDetailsModal />,
    LOGOUT: <LogoutModal />,
  };

  return <View style={styles.backdrop}>{ModalList[modalName]}</View>;
}

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
});
