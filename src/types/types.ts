export type inputTypeType = "email" | "password";

export interface IInput {
  id: number;
  type: inputTypeType;
  title: string;
  placeholder: string;
}

export interface IState {
  email: string;
  password: string;
}
