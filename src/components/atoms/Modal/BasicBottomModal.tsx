import { Modal, View, Pressable, StyleSheet, Text } from 'react-native';
import { ReactNode } from 'react';
import { IconButton } from '@components/atoms/IconButton/IconButton';
import Colors from '@/styles/colors';

export default function BasicBottomModal({
  children,
  isVisible,
  onClose,
  onDismiss,
  selectOpen,
  setSelectOpen,
}: {
  children: ReactNode;
  isVisible: boolean;
  onClose: () => void;
  onDismiss: () => void;
  selectOpen: boolean;
  setSelectOpen: (selectOpen: boolean) => void;
}) {
  return (
    <Modal
      animationType='fade'
      visible={isVisible}
      onDismiss={onDismiss}
      transparent
    >
      <View style={styles.container}>
        <Pressable style={{ flex: 1 }} onPress={onClose} />
        <View style={styles.modalView}>
          {/* TODO: 아이콘 확인 */}
          <View style={styles.modalHeader}>
            {selectOpen ? (
              <View style={styles.selectBoxHeader}>
                <IconButton
                  icon='chevron-back'
                  size={24}
                  color='black'
                  onPress={() => {
                    setSelectOpen(false);
                  }}
                />
                <Text style={styles.selectBoxTitle}>Select Options</Text>
              </View>
            ) : (
              <IconButton
                icon='chevron-down'
                size={24}
                color={Colors.fontGray01}
                onPress={onClose}
              />
            )}
          </View>
          <View style={styles.modalContent}>{children}</View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    borderRadius: 20,
    height: '50%',
    backgroundColor: 'white',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 15,
  },
  selectBoxHeader: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '7.5%',
  },
  selectBoxTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
    textAlign: 'center',
    paddingHorizontal: '25%',
  },
  modalContent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 30,
  },
});
