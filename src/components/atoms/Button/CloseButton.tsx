import { IconButton } from '@/components/atoms/Button/IconButton';

type CloseButtonProps = {
  onPress: () => void;
  color?: string;
};

export default function CloseButton({
  onPress,
  color = 'black',
}: CloseButtonProps) {
  return <IconButton icon='close' size={22} color={color} onPress={onPress} />;
}
