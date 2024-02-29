import { zodI18nMap } from 'zod-i18n-map';
import { z } from '../zod';

import { ConnectorSchema } from './Connector';
import { ValidStringSchema } from './ValidString';
import { IdSchema } from './Id';

export const PublicStationSchema = z.object({
  id: IdSchema,
  title: ValidStringSchema,
  description: ValidStringSchema,
  address: ValidStringSchema,
  coordinates: z.string(),
  public: z.boolean(),
  chargeConnectors: ConnectorSchema.array().min(1).max(8),
});
