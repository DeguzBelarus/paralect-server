import { IReply } from 'src/db/schemas/types';
import { IGeneralResponse } from 'src/types';

export interface IGetAllRepliesResponseData extends IGeneralResponse {
  data: Array<IReply>;
}
