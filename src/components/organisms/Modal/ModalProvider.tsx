import { useRecoilValue } from 'recoil';
import { View, StyleSheet } from 'react-native';
import ReviewModal from '@components/organisms/Modal/ReviewModal';
import ApplicationCancel from '@components/molecules/Modal/ApplicationCancel';
import ApplicantInfoModal from '@components/molecules/Modal/ApplicantInfoModal';
import ReviewDetailsModal from '@components/molecules/Modal/ReviewDetailsModal';
import ApplicationFilterModal from '@components/molecules/Modal/ApplicationFilterModal';
import LogoutModal from '@components/molecules/Modal/LogoutModal';
import ImgChangeModal from '@components/molecules/Modal/ImgChangeModal';
import modalState from '@/utils/recoil/modal';
import SearchModal from '@/components/organisms/Modal/SearchModal';
import ApplyModal from '@/components/organisms/Modal/ApplyModal';
import ApplyCheckModal from '@/components/molecules/Modal/ApplyCheckModal';
import ApplyCompleteModal from '@/components/organisms/Modal/ApplyCompleteModal';
import LoginInvalidModal from '@/components/molecules/Modal/LoginInvalidModal';
import JoinCancelModal from '@/components/molecules/Modal/JoinCancelModal';
import JoinCompleteModal from '@/components/organisms/Modal/JoinCompleteModal';
import AuthAlertModal from '@/components/molecules/Modal/AuthAlertModal';
import ReportCompleteModal from './ReportCompleteModal';
import UploadCompleteModal from './UploadCompleteModal';
import FullImageModal from './FullImageModal';

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
    SEARCH: <SearchModal />,
    FULL_IMAGE: modal.imgUrl ? (
      <FullImageModal imgUrl={modal.imgUrl} />
    ) : undefined,
    REPORT_COMPLETE: <ReportCompleteModal />,
    APPLY: <ApplyModal />,
    APPLY_CHECK: modal.applyCheck && (
      <ApplyCheckModal
        date={modal.applyCheck.date}
        user={modal.applyCheck.user}
      />
    ),
    APPLY_COMPLETE: <ApplyCompleteModal />,
    UPLOAD_COMPLETE: <UploadCompleteModal />,
    REVIEW: modal?.applicationItem && (
      <ReviewModal
        imgUrl={modal.applicationItem.imgUrl}
        title={modal.applicationItem.title}
      />
    ),
    APPLICATION_CANCEL: <ApplicationCancel />,
    APPLICANT_INFO: <ApplicantInfoModal />,
    REVIEW_DETAIL: <ReviewDetailsModal />,
    APPLICATION_FILTER: modal?.applicationFilter && (
      <ApplicationFilterModal
        category={modal.applicationFilter.category}
        onChange={modal.applicationFilter.onChange}
      />
    ),
    LOGOUT: <LogoutModal />,
    IMAGE_CHANGE: modal?.imageChange && (
      <ImgChangeModal
        imgUrl={modal.imageChange.imgUrl}
        onChange={modal.imageChange.onChange}
      />
    ),
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
