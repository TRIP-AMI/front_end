import { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Modal,
  Pressable,
} from 'react-native';
import NotifactionItem from '@/components/molecules/Item/NotifactionItem';
import Alarm from '@/types/Notifcation';
import notificationApi from '@/services/module/notification/notification';
import { NotificationList } from '@/services/module/notification/response';
import BlackBadge from '@/components/atoms/Tag/BlackBadge';
import Spacing from '@/styles/spacing';
import useModalHook from '@/hooks/modalHook';
import { NotificationEditOption } from '@/types/Literal/notification';

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
  const { isVisible, onOpen, onClose } = useModalHook();
  const [isEdit, setIsEdit] = useState(false);
  const badgeText = isEdit ? 'Completion' : 'Edit';
  const emptyList = alarmList.length === 0;

  const selectOption: {
    id: NotificationEditOption;
    label: string;
    handler: () => void;
  }[] = [
    {
      id: 'READ_ALL',
      label: 'Read it all',
      handler: () => {},
    },
    {
      id: 'DELETE_ALL',
      label: 'Delete the whole thing',
      handler: () => {},
    },
    {
      id: 'DELETE_SELECTION',
      label: 'Delete Selection',
      handler: () => {
        onClose();
        setIsEdit(true);
      },
    },
  ];

  const detaSet = async () => {
    const res = await notificationApi.getNotificationList();
    serAlarmList(processData(res));
  };

  const onEdit = () => {
    if (isEdit) {
      setIsEdit(false);
      return;
    }
    onOpen();
  };

  const deleteAlarm = (id: string) => {
    const newAlarmList = alarmList.filter((item) => item.alarmId !== id);
    serAlarmList(newAlarmList);
  };

  useEffect(() => {
    detaSet();
  }, []);

  return (
    <View style={styles.container}>
      {/* top */}
      <View style={styles.topInfo}>
        <Text style={styles.totalText}>{alarmList.length} Total</Text>
        <Pressable onPress={onEdit}>
          <BlackBadge text={badgeText} />
        </Pressable>
      </View>

      {/* empty */}
      {emptyList && (
        <View
          style={{
            paddingTop: 100,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontFamily: 'Montserrat-Medium',
              fontSize: 14,
              lineHeight: 20,
              color: '#77787A',
            }}
          >
            There is no notification.
          </Text>
        </View>
      )}

      {/* list */}
      {!emptyList && (
        <FlatList
          data={alarmList}
          renderItem={(item) => (
            <NotifactionItem
              alarm={item.item}
              edit={isEdit}
              deleteAlarm={deleteAlarm}
            />
          )}
          keyExtractor={(item) => item.alarmId}
        />
      )}

      {/* modal */}
      <Modal visible={isVisible} animationType='fade' transparent>
        <Pressable
          onPress={onClose}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <View style={styles.modalContentWrap}>
            {/* option */}
            <View style={{ padding: 20 }}>
              {selectOption.map((item) => {
                return (
                  <Pressable key={item.id} onPress={item.handler}>
                    <Text
                      style={{
                        fontFamily: 'Montserrat-Medium',
                        fontSize: 14,
                        lineHeight: 37,
                      }}
                    >
                      {item.label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
            {/* cancel */}
            <Pressable
              onPress={onClose}
              style={{ padding: 14, borderTopWidth: 1, borderColor: '#EBEBEB' }}
            >
              <Text
                style={{
                  alignSelf: 'center',
                  fontFamily: 'Montserrat-SemiBold',
                  fontSize: 14,
                  lineHeight: 20,
                }}
              >
                Cancel
              </Text>
            </Pressable>
          </View>
        </Pressable>
      </Modal>
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
  totalText: {
    color: '#77787A',
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    lineHeight: 30,
  },
  modalContentWrap: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 5,
  },
});
