export type ModalName =
  | 'NOTIFICATION'
  | 'SEARCH'
  | 'PICKER_SELECT'
  | 'LOGIN_INVALID'
  | 'JOIN_CANCEL'
  | 'JOIN_COMPLETE'
  | 'AUTH_ALERT'
  | 'APPLY'
  | 'APPLY_CHECK'
  | 'APPLY_COMPLETE'
  | 'UPLOAD_COMPLETE'
  | 'REVIEW'
  | 'APPLICATION_CANCEL'
  | 'APPLICANT_INFO'
  | 'REVIEW_DETAIL'
  | 'LOGOUT';

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
