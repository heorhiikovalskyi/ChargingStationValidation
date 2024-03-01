import { z } from '../zod/zod';
import { ConnectorTypeSchema } from './ConnectorType';
import { IdSchema } from './Id';

export const ConnectorSchema = z.object({
  id: IdSchema,
  type: ConnectorTypeSchema,
  maxPower: z.number(),
});
