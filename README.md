Here is a small validation app created to validate charging stations and translate responses in different languages using **zod**, **i18next** and **zod-i18n-map**.

Zod validates input data using schemas and generates errors which are translated with zod-i18n-map and configured i18next.

App translates errors in **English** and **Spainish** but it`s easy to add whatever language you want.

You can try it [here](https://chargingstationvalidation.fly.dev/validation)

Data example: **{"station": {"id": "06906f19-6806-4a3a-9fe9-6ef59da4040b", "title": "station0", "address": "10 Avenue des Champs-Élysées,75008 Paris, France","public": true,"coordinates":"48.8584° N, 2.2945° E" , "chargeConnectors": [{"id": 3, "type": "daads", "maxPower": 3}]}}**

Language should be defined in **accept-language** header
