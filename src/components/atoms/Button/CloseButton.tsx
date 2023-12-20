import { IconButton } from '@/components/atoms/Button/IconButton';

type CloseButtonProps = {
  onPress: () => void;
};

export default function CloseButton({ onPress }: CloseButtonProps) {
  return <IconButton icon='close' size={22} color='black' onPress={onPress} />;
}
