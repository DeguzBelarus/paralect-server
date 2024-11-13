export type ReplyStatusType = 'accepted' | 'refused' | 'waiting';

export interface IReply {
  _id?: string;
  status: ReplyStatusType;
  company: string;
  position: string;
  salaryFork: number;
  note: string;
}
