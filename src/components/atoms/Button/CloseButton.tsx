import { IconButton } from '@/components/atoms/Button/IconButton';

type CloseButtonProps = {
  onPress: () => void;
  size?: number;
};

export default function CloseButton({ onPress, size }: CloseButtonProps) {
  return (
    <IconButton
      icon='close'
      size={size || 22}
      color='black'
      onPress={onPress}
    />
  );
}
