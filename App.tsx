import { RecoilRoot } from 'recoil';
import Toast, { ToastConfig } from 'react-native-toast-message';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Navigation from '@/navigations/';
import CustomToast from '@/components/atoms/Toast/CustomToast';
import useFonts from '@/hooks/fontHook';

const queryClient = new QueryClient();

export default function App() {
  const { fontLoad } = useFonts();

  if (!fontLoad) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <RecoilRoot>
        <Navigation />
        <Toast config={CustomToast as ToastConfig} />
      </RecoilRoot>
    </QueryClientProvider>
  );
}
