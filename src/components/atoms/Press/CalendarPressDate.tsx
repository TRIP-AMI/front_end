import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Dayjs } from 'dayjs';
import Colors from '@/styles/colors';
import { CalendarDateItem } from '@/hooks/calendarHook';

export default function CalendarPressDate({
  item,
  conPress,
  active,
}: {
  item: CalendarDateItem;
  conPress: (dayjsFormat: Dayjs) => void;
  active: boolean;
}) {
  const handlePress = () => {
    conPress(item.date);
  };

  return (
    <Pressable
      key={Math.random()}
      disabled={item.disabled}
      onPress={handlePress}
      style={{ position: 'relative' }}
    >
      <View style={[active ? styles.activeWrap : undefined]} />

      <Text
        style={[
          styles.dateFont,
          item.disabled ? styles.dateFontDisabled : undefined,
          active ? styles.activeFont : undefined,
        ]}
      >
        {item.value}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  dateFont: {
    color: '#1E1E20',
    textAlign: 'center',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    lineHeight: 40,
  },
  dateFontDisabled: {
    color: '#A1A5AE',
  },
  activeWrap: {
    position: 'absolute',
    top: 1,
    width: 40,
    height: 'auto',
    alignSelf: 'center',
    aspectRatio: 1,
    backgroundColor: Colors.primary,
    borderRadius: 100,
  },
  activeFont: {
    color: '#fff',
  },
});
