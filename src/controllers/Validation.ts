import { Request, Response } from 'express';
import tryCatch from '../tryCatch';
import Controller from './Controller';
import { PrivateStationSchema } from '../ValidationSchemas/PrivateStation';
import { PublicStationSchema } from '../ValidationSchemas/PublicStation';
import { ValidationError } from '../types/classes/Errors';

class ValidationController extends Controller {
  constructor() {
    super('');
    this.router.post('/validation', tryCatch(this.validation));
  }
  private validation = async (req: Request, res: Response) => {
    const { station } = req.body;

    if (!station) throw new ValidationError('station isn`t provided');

    if (station.public) {
      PublicStationSchema.parse(station);
    } else {
      PrivateStationSchema.parse(station);
    }

    return res.sendStatus(200);
  };
}

export default ValidationController;
