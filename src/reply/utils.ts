import { BadRequestException } from '@nestjs/common';

import { IReply, ReplyStatusType } from './types';

const RIGHT_REPLY_STATUSES_ARRAY: Array<ReplyStatusType> = ['accepted', 'refused', 'waiting'];

export const validateCreateReplyDto = (dto: IReply) => {
  const { company, note, position, salaryFork, status } = dto;
  if (!company || !position || !status) {
    throw new BadRequestException('Not enough data to perform the operation');
  }
  const isSpecifiedNoteIncorrect = note && typeof note !== 'string';
  if (
    typeof company !== 'string' ||
    typeof position !== 'string' ||
    typeof status !== 'string' ||
    typeof salaryFork !== 'number' ||
    isSpecifiedNoteIncorrect
  ) {
    throw new BadRequestException('Incorrect data to perform the operation');
  }
  if (!salaryFork) {
    throw new BadRequestException('It is necessary to specify the size of the salary fork');
  }
};

export const validateUpdateReplyDto = (dto: IReply) => {
  const { status, company, note, position, salaryFork } = dto;
  const isSSpecifiedStatusIncorrect =
    (status && !RIGHT_REPLY_STATUSES_ARRAY.includes(status)) ||
    (status && typeof status !== 'string');
  const isSpecifiedCompanyIncorrect = company && typeof company !== 'string';
  const isSpecifiedPositionIncorrect = position && typeof position !== 'string';
  const isSpecifiedSalaryForkIncorrect =
    typeof salaryFork !== 'undefined' && typeof salaryFork !== 'number';
  const isSpecifiedNoteIncorrect = note && typeof note !== 'string';
  const isNotSalaryForkSpecified = typeof salaryFork === 'number' && !salaryFork;
  if (
    isSSpecifiedStatusIncorrect ||
    isSpecifiedCompanyIncorrect ||
    isSpecifiedPositionIncorrect ||
    isSpecifiedSalaryForkIncorrect ||
    isSpecifiedNoteIncorrect
  ) {
    throw new BadRequestException('Incorrect data to perform the operation');
  }
  if (!RIGHT_REPLY_STATUSES_ARRAY.includes(status))
    if (isNotSalaryForkSpecified) {
      throw new BadRequestException('It is necessary to specify the size of the salary fork');
    }
};
