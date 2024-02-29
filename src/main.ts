import App from './app';
import ValidationController from './controllers/Validation';
import 'dotenv/config';

const { PORT } = process.env;

const main = async () => {
  const validationController = new ValidationController();
  const controllers = [validationController];
  const app = new App(Number(PORT), controllers);

  app.start();
};

main();
