import { useSetRecoilState } from 'recoil';
import { View, StyleSheet } from 'react-native';
import { Badge } from 'react-native-paper';
import { IconButton } from '@components/atoms/Button/IconButton';
import { useState } from 'react';
// import SearchModal from '@/components/organisms/Modal/SearchModal';
// import useModalHook from '@/hooks/modalHook';
// import NotifcationModal from '@/components/organisms/Modal/NotifcationModal';
import modalState from '@/utils/recoil/modal';

export default function HomeHeaderIcons() {
  const setModal = useSetRecoilState(modalState);

  // const {
  //   isVisible: searchModalVisible,
  //   onOpen: searchModalOpen,
  //   onClose: searchModalClose,
  // } = useModalHook();

  const onSearchPress = () => {
    setModal({ modalName: 'SEARCH' });
  };

  const onNotiPress = () => {
    setModal({ modalName: 'NOTIFICATION' });
  };

  // const {
  //   isVisible: notifcationModalVisible,
  //   onOpen: notifcationModalOpen,
  //   onClose: notifcationModalClose,
  // } = useModalHook();

  const [alarmCount] = useState(1);
  const alarmBadgeShow = alarmCount > 0;

  return (
    <View style={styles.container}>
      <View>
        <IconButton
          icon='search'
          size={24}
          color='black'
          onPress={onSearchPress}
        />
        {/* <SearchModal
          isVisible={searchModalVisible}
          onClose={searchModalClose}
        /> */}
      </View>
      <View>
        <IconButton
          icon='notifications-outline'
          size={24}
          color='black'
          onPress={onNotiPress}
        />
        <Badge size={7} visible={alarmBadgeShow} style={styles.badge} />
        {/* <NotifcationModal
          isVisible={notifcationModalVisible}
          onClose={notifcationModalClose}
        /> */}
      </View>

      {
        // TODO: 추후에 추가될 예정
        /* <View>
        <IconButton
          icon='globe-outline'
          size={24}
          color='black'
          onPress={() => console.log('globe')}
        />
      </View> */
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 10,
  },
  badge: {
    position: 'absolute',
    top: 2,
    right: 3,
  },
});
