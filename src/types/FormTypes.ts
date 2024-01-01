export interface IJoinAuthInputs {
  email: string;
  authCode: string;
}

export interface ILoginInputs {
  email: string;
  password: string;
}

export interface ICreatePasswordInputs {
  password: string;
  reentered: string;
}

export interface IReportDetailInputs {
  content: string;
}
