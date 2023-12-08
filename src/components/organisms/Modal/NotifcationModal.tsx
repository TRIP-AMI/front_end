import BasicFullScreenModal from '@components/atoms/Modal/BasicFullScreenModal';
import { useEffect, useState } from 'react';
import Alarm from '@/types/Notifcation';
import NotifactionItem from '@/components/molecules/Item/NotifactionItem';

const data = [
  {
    id: '1',
    title: 'Booking Notification',
    content: 'Jennie’s Itaewon program application has been completed',
    read: false,
  },
  {
    id: '2',
    title: 'Booking Notification',
    content: 'Jennie’s Itaewon program application has been completed',
    read: true,
  },
  {
    id: '3',
    title: 'Booking Notification',
    content: 'Jennie’s Itaewon program application has been completed',
    read: false,
  },
  {
    id: '4',
    title: 'Booking Notification',
    content: 'Jennie’s Itaewon program application has been completed',
    read: true,
  },
];

const processData = (): Alarm[] => {
  return data.map((item) => {
    return Alarm.Builder.withAlarmId(item.id)
      .withAlarmTitle(item.title)
      .withAlarmContent(item.content)
      .withAlarmReadState(item.read)
      .build();
  });
};

function NotifcationModal({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: () => void;
}) {
  const [alarmList, serAlarmList] = useState<Alarm[]>([]);

  useEffect(() => {
    serAlarmList(processData());
  }, []);

  return (
    <BasicFullScreenModal
      modalTitle='Notifcation'
      isVisible={isVisible}
      onClose={onClose}
    >
      {alarmList.map((alarm) => {
        return <NotifactionItem key={alarm.alarmId} alarm={alarm} />;
      })}
    </BasicFullScreenModal>
  );
}

export default NotifcationModal;
