import { View, StyleSheet } from 'react-native';

import SearchButton from '../Button/SearchButton';
import NotificationButton from '../Button/NotificationButton';

export default function SearchNotificationRight({
  theme = 'black',
}: {
  theme?: 'white' | 'black';
}) {
  return (
    <View style={styles.container}>
      {/* search */}
      <SearchButton theme={theme} />
      {/* notifications */}
      <NotificationButton theme={theme} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
