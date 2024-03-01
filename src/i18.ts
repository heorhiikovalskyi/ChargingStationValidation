import i18next from 'i18next';

import englishZod from 'zod-i18n-map/locales/en/zod.json';
import spanishZod from 'zod-i18n-map/locales/es/zod.json';

import englishCustom from './resources/locales/en/custom.json';
import spanishCustom from './resources/locales/es/custom.json';

import englishFields from './resources/locales/en/fields.json';
import spainishFields from './resources/locales/es/fields.json';

import { languages } from './languages';

i18next.init({
  resources: {
    es: {
      zod: spanishZod,
      custom: spanishCustom,
      fields: spainishFields,
    },
    en: {
      zod: englishZod,
      custom: englishCustom,
      fields: englishFields,
    },
  },
  preload: languages,
  supportedLngs: languages,
});

export { i18next };
