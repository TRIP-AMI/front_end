export type User = {
  memberId: number;
  email: string;
  nickname: string;
  imgUrl: string;
  roles: string[];
  agreedMarketing: boolean;
  token: string;
};

export type Profile = 'AMI' | 'Tourist';
