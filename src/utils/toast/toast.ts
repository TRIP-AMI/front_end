import Toast from 'react-native-toast-message';
import Spacing from '@/styles/spacing';

const showToast = (text: string, offset?: number) => {
  Toast.show({
    type: 'basic',
    text1: text,
    position: 'bottom',
    bottomOffset: offset || Spacing.ToastBasic,
  });
};

export default showToast;
