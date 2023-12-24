export type ModalName =
  | 'NOTIFICATION'
  | 'SEARCH'
  | 'PICKER_SELECT'
  | 'LOGIN_CHECK'
  | 'LOGIN_INVALID'
  | 'JOIN_CANCEL'
  | 'JOIN_COMPLETE'
  | 'APPLY'
  | 'APPLY_CHECK'
  | 'APPLY_COMPLETE'
  | 'REVIEW'
  | 'APPLICATION_CANCEL'
  | 'APPLICANT_INFO'
  | 'SURVEY';

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

export type CustomModalProps = {
  applyCheck?: ApplyCheckProps;
  title?: string;
  applicationItem?: ApplicationItemProps;
};

export type ModalState = CustomModalProps & {
  modalName: ModalName;
};
