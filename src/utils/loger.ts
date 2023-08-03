export const log = (text: string, data: unknown = '') => {
  const time = new Date();

  console.log('[' + time.toTimeString().substr(0, 8) + '] ' + text, data);
};

export const logError = (text: string, error?: Error) => {
  const time = new Date();

  console.log(
    '[' + time.toTimeString().substr(0, 8) + '] ' + text,
    error || ''
  );
  console.trace();
};
