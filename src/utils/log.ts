export const log = (type: 'info' | 'error', message: string) => {
  if (process.env.ENVIRONMENT !== 'test') {
    return type === 'info' ? console.log(message) : console.error(message);
  }
  return null;
};
