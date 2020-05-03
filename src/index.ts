import 'reflect-metadata';

import app from './app';

app.configure()
  .then(() => app.start());
