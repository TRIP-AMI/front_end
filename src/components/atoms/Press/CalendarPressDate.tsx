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
      key={item.date.format()}
      disabled={active || item.disabled}
      onPress={handlePress}
      style={{ position: 'relative', opacity: item.disabled ? 0.4 : 1 }}
    >
      <View style={[active ? styles.activeWrap : undefined]} />

      <Text style={[styles.dateFont, active ? styles.activeFont : undefined]}>
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
