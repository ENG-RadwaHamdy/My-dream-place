import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

export function generateUUID() {
  return uuidv4();
}

export function generateExpirationDate(days) {
  return dayjs().add(days, 'days').toISOString();
}