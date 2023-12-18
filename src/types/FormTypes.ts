export interface IJoinAuthInputs {
  email: string;
  authCode: string;
  password: string;
}

export interface ILoginInputs {
  email: string;
  password: string;
}

export interface ICreatePasswordInputs {
  password: string;
  reentered: string;
}
