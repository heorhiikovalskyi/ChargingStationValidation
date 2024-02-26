import { z } from 'zod';
import { ConnectorSchema } from './Connector';
import { ValidStringSchema } from './ValidString';

export const PrivateStationSchema = z.object({
  id: z.number(),
  title: ValidStringSchema.optional(),
  description: ValidStringSchema.optional(),
  address: ValidStringSchema.optional(),
  coordinates: ValidStringSchema.optional(),
  public: z.boolean(),
  chargeConnectors: ConnectorSchema.array().min(1).max(8),
});
