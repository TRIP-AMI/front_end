import {
  View,
  StyleSheet,
  Modal,
  Pressable,
  Animated,
  Dimensions,
} from 'react-native';
import { useEffect, useRef } from 'react';

export default function BasicBotoomSheetModal({
  children,
  isVisible,
  onClose,
}: {
  children: JSX.Element;
  isVisible: boolean;
  onClose: () => void;
}) {
  const screenHeight = Dimensions.get('screen').height;
  const contentAnimation = useRef(new Animated.Value(screenHeight)).current;

  const resetBottomSheet = Animated.timing(contentAnimation, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const closeBottomSheet = Animated.timing(contentAnimation, {
    toValue: screenHeight,
    duration: 300,
    useNativeDriver: true,
  });

  const closeModal = () => {
    closeBottomSheet.start(() => {
      onClose();
    });
  };

  useEffect(() => {
    if (isVisible) {
      resetBottomSheet.start();
    } else {
      closeBottomSheet.start();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isVisible]);
  return (
    <Modal visible={isVisible} animationType='fade' transparent>
      <View style={styles.overlay}>
        {/* dim */}
        <Pressable onPress={closeModal} style={{ flex: 1 }} />

        {/* content */}
        <Animated.View
          style={[
            styles.contentWrap,
            { transform: [{ translateY: contentAnimation }] },
          ]}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  contentWrap: {
    paddingVertical: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    backgroundColor: '#fff',
  },
});
