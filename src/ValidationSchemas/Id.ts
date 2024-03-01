import { z } from '../zod/zod';

export const IdSchema = z.string().uuid();
