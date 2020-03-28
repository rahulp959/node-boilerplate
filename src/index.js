import Sentry from '@sentry/node';

export async function handler(event, context) {
  Sentry.init({ dsn: 'https://3333a73f1d6544b0926f10bd5835c690@sentry.io/5178520' });
  
  console.log(`EVENT: \n${  JSON.stringify(event, null, 2)}`)
  return context.logStreamName
}
