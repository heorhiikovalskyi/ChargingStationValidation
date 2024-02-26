import { z } from 'zod';
import { ConnectorSchema } from './Connector';
import { ValidStringSchema } from './ValidString';

export const PublicStationSchema = z.object({
  id: z.number(),
  title: ValidStringSchema,
  description: ValidStringSchema,
  address: ValidStringSchema,
  coordinates: ValidStringSchema,
  public: z.boolean(),
  chargeConnectors: ConnectorSchema.array().min(1).max(8),
});
