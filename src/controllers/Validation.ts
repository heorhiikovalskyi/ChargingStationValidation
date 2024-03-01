import { Request, Response } from 'express';
import tryCatch from '../tryCatch';
import Controller from './Controller';
import { PrivateStationSchema } from '../ValidationSchemas/PrivateStation';
import { PublicStationSchema } from '../ValidationSchemas/PublicStation';
import { i18next } from '../i18';
import { languages } from '../languages';
import { InvalidLanguage } from '../errors/InvalidLanguage';

class ValidationController extends Controller {
  constructor() {
    super('');
    this.router.post('/validation', tryCatch(this.validation));
  }
  private validation = async (req: Request, res: Response) => {
    const { station } = req.body;

    let language = req.headers['accept-language'];

    if (!language) language = 'en';

    if (!languages.includes(language)) throw new InvalidLanguage();

    await i18next.changeLanguage(language);

    if (station.public) {
      PublicStationSchema.parse(station);
    } else {
      PrivateStationSchema.parse(station);
    }

    return res.sendStatus(200);
  };
}

export default ValidationController;
