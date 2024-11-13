import { config } from 'dotenv';

config();
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const PORT = process.env.PORT || 5000;
export const EMPTY_STRING = '';
