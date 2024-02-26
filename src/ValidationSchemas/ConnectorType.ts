import { z } from 'zod';

const connectorTypes: [string, ...string[]] = ['CCS', 'CHAdeMO', 'Type1', 'Type2'];

const errorMap: z.ZodErrorMap = (issue, ctx) => {
  let message = 'expected: ';
  connectorTypes.forEach((type) => (message += `${type}, `));
  return { message: message.slice(0, -2) };
};

export const ConnectorTypeSchema = z.enum(connectorTypes, { errorMap });
