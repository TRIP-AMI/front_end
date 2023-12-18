export type ModalName =
  | 'NOTIFICATION'
  | 'SEARCH'
  | 'LOGIN_CHECK'
  | 'LOGIN_INVALID'
  | 'JOIN_CANCEL'
  | 'JOIN_COMPLETE'
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

export type CustomModalProps = {
  applyCheck?: ApplyCheckProps;
  title?: string;
};
export type ModalState = CustomModalProps & {
  modalName: ModalName;
};
