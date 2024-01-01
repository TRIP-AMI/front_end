export type ModalName =
  | 'NOTIFICATION'
  | 'SEARCH'
  | 'PICKER_SELECT'
  | 'LOGIN_INVALID'
  | 'JOIN_CANCEL'
  | 'JOIN_COMPLETE'
  | 'AUTH_ALERT'
  | 'REPORT_COMPLETE'
  | 'APPLY'
  | 'APPLY_CHECK'
  | 'APPLY_COMPLETE'
  | 'UPLOAD_COMPLETE'
  | 'REVIEW'
  | 'APPLICATION_CANCEL'
  | 'APPLICANT_INFO'
  | 'REVIEW_DETAIL'
  | 'APPLICATION_FILTER'
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
  applicationFilter?: ApplicationFilterProps;
};

export type ModalState = CustomModalProps & {
  modalName: ModalName;
};

export type ApplicationFilterProps = {
  category: string;
  onChange: (select: string) => void;
};
