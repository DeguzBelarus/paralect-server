import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';

import { Reply } from 'src/db/schemas/reply.schema';
import { IRepliesResponseData } from './types';
import { CreateReplyDto, UpdateReplyDto } from './reply.dto';
import { validateUpdateReplyDto, validateCreateReplyDto } from './utils';

@Injectable()
export class ReplyService {
  constructor(@InjectModel(Reply.name) private readonly replyModel: Model<Reply>) {}

  async getAll(): Promise<IRepliesResponseData> {
    const replies = await this.replyModel.find();
    return {
      message: 'Replies data has been successfully received',
      data: replies,
    };
  }

  async createReply(createReplyDto: CreateReplyDto): Promise<IRepliesResponseData> {
    validateCreateReplyDto(createReplyDto);
    await this.replyModel.create(createReplyDto);
    const replies = await this.replyModel.find();
    return {
      message: 'The reply was successfully created',
      data: replies,
    };
  }

  async updateReply(
    replyId: string,
    updateReplyDto: UpdateReplyDto,
  ): Promise<IRepliesResponseData> {
    if (!isValidObjectId(replyId)) {
      throw new BadRequestException('The specified replyId in not correct');
    }
    const founDReply = await this.replyModel.findById(replyId);
    if (!founDReply) {
      throw new NotFoundException(`The specified reply with id ${replyId} was not found`);
    }
    validateUpdateReplyDto(updateReplyDto);
    await founDReply.updateOne(updateReplyDto);
    const replies = await this.replyModel.find();
    return {
      message: 'The reply was successfully updated',
      data: replies,
    };
  }

  async deleteReply(replyId: string): Promise<IRepliesResponseData> {
    if (!isValidObjectId(replyId)) {
      throw new BadRequestException('The specified replyId in not correct');
    }
    const founDReply = await this.replyModel.findByIdAndDelete(replyId);
    if (!founDReply) {
      throw new NotFoundException(`The specified reply with id ${replyId} was not found`);
    }
    const replies = await this.replyModel.find();
    return {
      message: 'The reply was successfully deleted',
      data: replies,
    };
  }
}
