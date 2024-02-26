import { z } from 'zod';
import { ConnectorTypeSchema } from './ConnectorType';



export const ConnectorSchema = z.object({ id: z.number(), type: ConnectorTypeSchema, maxPower: z.number() });
