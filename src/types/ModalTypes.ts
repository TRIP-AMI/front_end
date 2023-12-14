export type ModalName =
  | 'NOTIFICATION'
  | 'SEARCH'
  | 'LOGIN_CHECK'
  | 'APPLY'
  | 'APPLY_CHECK'
  | 'APPLY_COMPLETE';

export type ApplyCheckProps = {
  date: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
};

export type ModalState = {
  modalName: ModalName;
  applyCheck?: ApplyCheckProps;
};
