import { z } from 'zod';
import { makeZodI18nMap } from 'zod-i18n-map/dist/index.mjs';

z.setErrorMap(makeZodI18nMap({ ns: ['zod', 'custom'] }));

export { z };
