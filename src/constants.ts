import { config } from 'dotenv';

config();
export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const PORT = process.env.PORT || 5000;
export const EMPTY_STRING = '';
const DB_USER_NAME = process.env.db_user_name;
const DB_USER_PASSWORD = process.env.db_user_password;
export const MONGO_DB_ACCESS_STRING = `mongodb+srv://${DB_USER_NAME}:${DB_USER_PASSWORD}@paralect-db.liqam.mongodb.net/`;
export const REPLY_NOTE_MAXIMUM_LENGTH = 255;
