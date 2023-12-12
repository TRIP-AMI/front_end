export type ModalName =
  | 'NOTIFICATION'
  | 'SEARCH'
  | 'LOGIN_CHECK'
  | 'APPLY'
  | 'APPLY_CHECK'
  | 'APPLY_COMPLETE';

export type ModalState = {
  modalName: ModalName;
};
