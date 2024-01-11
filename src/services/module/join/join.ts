import instance from '@/services/config/axios';

type checkEmailRequest = {
  email: string;
};

const checkEmail = (req: checkEmailRequest) => {
  const url = `/auth/check/email`;
  const method = 'POST';
  const data = req;
  return instance({ url, method, data });
};

type sendAuthCodeRequest = checkEmailRequest;

const sendAuthCode = (req: sendAuthCodeRequest) => {
  const url = `/auth/send-mail`;
  const method = 'POST';
  const data = req;
  return instance({ url, method, data });
};

type checkAuthCodeRequest = checkEmailRequest & {
  inputCode: string;
};

const checkAuthCode = (req: checkAuthCodeRequest) => {
  const url = `/auth/join/confirm`;
  const method = 'POST';
  const data = req;
  return instance({ url, method, data });
};

type checkNicknameRequest = {
  nickName: string;
};

const checkNickname = (req: checkNicknameRequest) => {
  const url = `/auth/check/nickname`;
  const method = 'POST';
  const data = req;
  return instance({ url, method, data });
};

type checkPasswordRequest = {
  password: string;
};

const checkPassword = (req: checkPasswordRequest) => {
  const url = `/auth/check/password`;
  const method = 'POST';
  const data = req;
  return instance({ url, method, data });
};

type joinRequest = {
  email: string;
  password: string;
  nickname: string;
  agreedMarketing: boolean;
};

const join = (req: joinRequest) => {
  const url = `/auth/join`;
  const method = 'POST';
  const data = req;
  return instance({ url, method, data });
};

type checkMemberRequest = checkEmailRequest;

const checkMember = (req: checkMemberRequest) => {
  const url = `/auth/check/member`;
  const method = 'POST';
  const data = req;
  return instance({ url, method, data });
};

export default {
  checkEmail,
  sendAuthCode,
  checkAuthCode,
  checkNickname,
  checkPassword,
  join,
  checkMember,
};
