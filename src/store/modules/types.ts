export interface Action<Type> {
  type: Type;
}

export interface PayloadAction<Type, Payload> {
  type: Type;
  payload: Payload;
}

export interface ICommonState {
  error: string;
  loading: boolean;
}
