import { z } from '../zod';

export const ValidStringSchema = z
  .string()
  .refine((val) => val !== '' && val !== '-', { params: { i18n: 'emptyString' } });
