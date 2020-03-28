const Sentry = require('@sentry/node');

Sentry.init({ dsn: 'https://3333a73f1d6544b0926f10bd5835c690@sentry.io/5178520' });

export async function handler(event, context) {
  console.log(`EVENT: \n${  JSON.stringify(event, null, 2)}`)
  console.log(event.bad.bad.bad)
  return context.logStreamName
}
