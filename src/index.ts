
import app from './app';
import 'reflect-metadata';

app.configure()
  .then(() => app.start());
