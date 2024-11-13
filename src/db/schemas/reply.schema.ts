import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { IReply, ReplyStatusType } from './types';

@Schema()
export class Reply implements IReply {
  @Prop()
  _id?: string;
  @Prop()
  status: ReplyStatusType;
  @Prop()
  company: string;
  @Prop()
  position: string;
  @Prop()
  salaryFork: number;
  @Prop()
  note: string;
}
export type ReplyDocument = HydratedDocument<Reply>;
export const ReplySchema = SchemaFactory.createForClass(Reply);
