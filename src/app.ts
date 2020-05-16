import express from 'express';
import bodyParser from 'body-parser';
import { useExpressServer, useContainer } from 'routing-controllers';
import { createConnection, useContainer as typeormUseContainer, Connection } from 'typeorm';
import { Container } from 'typedi';

import { loadFromDirectories } from '@utils/load-from-directories';
import { log } from '@utils/log';

class App {
  public app: express.Application;

  public dbConnection: Connection;

  async configure() {
    this.app = express();
    this.configBodyParser();
    this.configRoutes();
    await this.configDatabase();
    await this.configInversionOfControl();
  }

  start() {
    const PORT = process.env.PORT || 4000;

    this.app.listen(PORT, () => log('info', `Server listening on port ${PORT}!`));
  }

  private configBodyParser() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private configRoutes() {
    useContainer(Container);

    useExpressServer(this.app, {
      controllers: [
        `${__dirname}/web/controllers/*.{ts,js}`],
    });
  }

  private async configDatabase() {
    try {
      typeormUseContainer(Container);
      this.dbConnection = await createConnection({
        type: 'postgres',
        database: process.env.DB_DATABASE,
        synchronize: true,
        logging: process.env.ENVIRONMENT === 'development',
        entities: [
          `${__dirname}/infra/entities/*.{ts,js}`,
        ],
        host: process.env.DB_ENDPOINT,
        port: parseInt(process.env.DB_PORT as string, 10),
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
      });
      log('info', 'Connected to the database!');
    } catch (error) {
      log('error', error);
      process.exit(1);
    }
  }

  private async configInversionOfControl() {
    loadFromDirectories([`${__dirname}/infra/repositories/*.{ts,js}`]);
  }
}

export default App;
