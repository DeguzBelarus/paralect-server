import { Controller, Get } from '@nestjs/common';

import { ReplyService } from './reply.service';
import { RoutesEnum } from 'src/routes';

@Controller(RoutesEnum.REPLY_ROUTE)
export class ReplyController {
  constructor(private readonly replyService: ReplyService) {}

  @Get()
  getAll() {
    return this.replyService.getAll();
  }
}
