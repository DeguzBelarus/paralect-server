import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { Reply } from 'src/db/schemas/reply.schema';
import { IGetAllRepliesResponseData } from './types';

@Injectable()
export class ReplyService {
  constructor(@InjectModel(Reply.name) private readonly replyModel: Model<Reply>) {}

  async getAll(): Promise<IGetAllRepliesResponseData> {
    const replies = await this.replyModel.find();
    return {
      message: 'replies data has been successfully received',
      data: replies,
    };
  }
}
