export type Action<T extends string> = {
  type: T;
};

export type ActionPayload<T extends string, P extends any> = Action<T> & {
  payload: P;
};
