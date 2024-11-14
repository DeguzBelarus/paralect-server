import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

import { IReply, ReplyStatusType } from 'src/reply/types';

@Schema()
export class Reply implements IReply {
  @Prop({ required: true })
  status: ReplyStatusType;
  @Prop({ required: true })
  company: string;
  @Prop({ required: true })
  position: string;
  @Prop({ required: true })
  salaryFork: number;
  @Prop({ default: '' })
  note: string;
}
export type ReplyDocument = HydratedDocument<Reply>;
export const ReplySchema = SchemaFactory.createForClass(Reply);
