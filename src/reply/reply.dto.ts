import { IReply, ReplyStatusType } from 'src/db/schemas/types';

export class CreateReplyDto implements IReply {
  status: ReplyStatusType;
  company: string;
  position: string;
  salaryFork: number;
  note: string;
}

export class UpdateReplyDto implements IReply {
  status: ReplyStatusType;
  company: string;
  position: string;
  salaryFork: number;
  note: string;
}
