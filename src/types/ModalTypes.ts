export type ModalName =
  | 'NOTIFICATION'
  | 'SEARCH'
  | 'LOGIN_CHECK'
  | 'LOGIN_INVALID'
  | 'JOIN_CANCEL'
  | 'APPLY'
  | 'APPLY_CHECK'
  | 'APPLY_COMPLETE'
  | 'REVIEW';

export type ApplyCheckProps = {
  date: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
};

export type ApplicationItemProps = {
  imgUrl: string;
  title: string;
};

export type ModalState = {
  modalName: ModalName;
  applyCheck?: ApplyCheckProps;
  applicationItem?: ApplicationItemProps;
};
