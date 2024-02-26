import { z } from 'zod';

export const ValidStringSchema = z
  .string()
  .refine((val) => val !== '' && val !== '-', `string should not be emty or "-"`);
