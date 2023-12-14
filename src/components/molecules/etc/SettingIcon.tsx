import { View, StyleSheet } from 'react-native';
import { FeatherIconButton } from '@components/atoms/Button/IconButton';
import { useState } from 'react';

export default function HomeHeaderIcons() {
  const [isVisible, setIsVisible] = useState(false);

  console.log(isVisible);

  const onOpen = () => {
    setIsVisible(true);
  };
  // const onClose = () => {
  //   setIsVisible(false);
  // };

  return (
    <View style={styles.container}>
      <View>
        <FeatherIconButton
          icon='settings'
          size={24}
          color='#121212'
          onPress={onOpen}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 26.64,
  },
  badge: {
    position: 'absolute',
    top: 2,
    right: 3,
  },
});
