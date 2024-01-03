export type NotificationListItem = {
  id: string;
  title: string;
  content: string;
  link: string;
  read: boolean;
};

export type NotificationList = NotificationListItem[];
