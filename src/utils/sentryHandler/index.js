const Sentry = require('@sentry/node');

export default function sentryHandler(lambdaHandler) {
  return async (event, context) => {
    try {
      return await lambdaHandler(event, context);
    } catch (error) {
      Sentry.captureException(error);
      await Sentry.flush(2000);
      throw error;
    }
  };
}
