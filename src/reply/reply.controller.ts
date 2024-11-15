import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';

import { ReplyService } from './reply.service';
import { RoutesEnum } from 'src/routes';
import { CreateReplyDto, UpdateReplyDto } from './reply.dto';
import { ReplyRoutesEnum } from './routes';

@Controller(RoutesEnum.REPLY_ROUTE)
export class ReplyController {
  constructor(private readonly replyService: ReplyService) {}

  @Get()
  async getAll() {
    return await this.replyService.getAll();
  }

  @Post()
  async createReply(@Body() body: CreateReplyDto) {
    body.salaryFork = Number(body.salaryFork);
    return await this.replyService.createReply(body);
  }

  @Post(ReplyRoutesEnum.REPLY_UPDATE_ROUTE)
  async updateReply(@Body() body: UpdateReplyDto, @Param('replyId') replyId: string) {
    body.salaryFork = Number(body.salaryFork);
    return await this.replyService.updateReply(replyId, body);
  }

  @Delete(ReplyRoutesEnum.REPLY_DELETE_ROUTE)
  async deleteReply(@Param('replyId') replyId: string) {
    return await this.replyService.deleteReply(replyId);
  }
}
