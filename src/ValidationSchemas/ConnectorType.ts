import { z } from '../zod';
const connectorTypes: [string, ...string[]] = ['CCS', 'CHAdeMO', 'Type1', 'Type2'];

export const ConnectorTypeSchema = z
  .string()
  .refine((string) => connectorTypes.includes(string), { params: { i18n: 'connectorType' } });
