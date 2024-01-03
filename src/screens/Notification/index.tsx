import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import NotifactionItem from '@/components/molecules/Item/NotifactionItem';
import Alarm from '@/types/Notifcation';
import notificationApi from '@/services/module/notification/notification';
import { NotificationList } from '@/services/module/notification/response';
import BlackBadge from '@/components/atoms/Tag/BlackBadge';
import Spacing from '@/styles/spacing';

const processData = (list: NotificationList): Alarm[] => {
  return list.map((item) => {
    return Alarm.Builder.withAlarmId(item.id)
      .withAlarmTitle(item.title)
      .withAlarmContent(item.content)
      .withAlarmReadState(item.read)
      .build();
  });
};

export default function NotificationScreen() {
  const [alarmList, serAlarmList] = useState<Alarm[]>([]);

  const deatSet = async () => {
    const res = await notificationApi.getNotificationList();
    serAlarmList(processData(res));
  };

  useEffect(() => {
    deatSet();
  }, []);

  return (
    <View style={styles.container}>
      {/* top */}
      <View style={styles.topInfo}>
        <Text>{alarmList.length} Total</Text>
        <BlackBadge text='Edit' />
      </View>

      {/* list */}
      <FlatList
        data={alarmList}
        renderItem={(item) => <NotifactionItem alarm={item.item} />}
        keyExtractor={(item) => item.alarmId}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Spacing.IOS392Margin,
    backgroundColor: 'white',
  },
  topInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 13,
  },
});
