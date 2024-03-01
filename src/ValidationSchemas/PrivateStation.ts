import { z } from '../zod';
import { ConnectorSchema } from './Connector';
import { ValidStringSchema } from './ValidString';
import { IdSchema } from './Id';

export const PrivateStationSchema = z.object({
  id: IdSchema,
  title: ValidStringSchema.optional(),
  description: ValidStringSchema.optional(),
  address: ValidStringSchema.optional(),
  coordinates: z.string().optional(),
  public: z.boolean(),
  chargeConnectors: ConnectorSchema.array().min(1).max(8),
});
