import { Types } from 'mongoose';

import { IGeneralResponse } from 'src/types';

export type ReplyStatusType = 'accepted' | 'refused' | 'waiting';

export interface IReply {
  _id?: Types.ObjectId;
  status?: ReplyStatusType;
  company: string;
  position: string;
  salaryFork: number;
  note: string;
}

export interface IRepliesResponseData extends IGeneralResponse {
  data: Array<IReply>;
}
