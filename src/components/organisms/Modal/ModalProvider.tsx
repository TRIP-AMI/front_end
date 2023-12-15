import { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ReviewModal from '@components/organisms/Modal/ReviewModal';
import modalState from '@/utils/recoil/modal';
import LoginModal from '@/components/molecules/Modal/LoginModal';
import loginState from '@/utils/recoil/login';
import NotifcationModal from '@/components/organisms/Modal/NotifcationModal';
import SearchModal from '@/components/organisms/Modal/SearchModal';
import ApplyModal from '@/components/organisms/Modal/ApplyModal';
import ApplyCheckModal from '@/components/molecules/Modal/ApplyCheckModal';
import ApplyCompleteModal from '@/components/organisms/Modal/ApplyCompleteModal';

export default function ModalProvider() {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(loginState);
  const modal = useRecoilValue(modalState);
  const modalName = modal?.modalName;
  const getToken = async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  };

  useEffect(() => {
    getToken();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!modalName) return null;

  const ModalList: { [key: string]: JSX.Element | undefined } = {
    LOGIN_CHECK: <LoginModal />,
    NOTIFICATION: <NotifcationModal />,
    SEARCH: <SearchModal />,
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
  };

  return (
    <View style={styles.backdrop}>
      {isLoggedIn ? ModalList[modalName] : <LoginModal />}
    </View>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: '#00000080',
  },
});
