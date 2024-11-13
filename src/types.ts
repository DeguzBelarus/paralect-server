export type Nullable<T> = T | null;
export type Undefinable<T> = T | undefined;
export type VoidMethod = () => void;

export interface IGeneralResponse {
  message: string;
  statusCode?: number;
  requestPath?: string;
  issueTime?: string;
}

export interface IGeneralResponse {
  message: string;
  statusCode?: number;
  requestPath?: string;
  issueTime?: string;
}

export interface IServerReadyStateCheckResponse extends IGeneralResponse {
  readyState?: 'ready';
}
