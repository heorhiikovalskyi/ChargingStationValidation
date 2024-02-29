import express from 'express';
import Controller from './controllers/Controller';
import cors from 'cors';
import ErrorHandler from './ErrorHandler';
const { zod, server } = new ErrorHandler();

class App {
  app: express.Application;
  private port: number;
  private controllers: Controller[];
  constructor(port: number, controllers: Controller[]) {
    this.app = express();
    this.port = port;
    this.controllers = controllers;
    this.initializeMiddlewares();
    this.initializeControllers();
    this.initializeErrorHandlers();
  }
  public start() {
    try {
      this.app.listen(this.port, () => {
        console.log(`http://localhost:${this.port}/`);
      });
    } catch (error) {
      console.log(error);
    }
  }
  private initializeControllers() {
    this.controllers.forEach((controller) => {
      this.app.use(controller.path, controller.router);
    });
  }

  private async initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
  }

  private initializeErrorHandlers() {
    this.app.use(zod);
    this.app.use(server);
  }
}

export default App;
