import Sentry from '@sentry/node';
import sentryHandler from './utils/sentryHandler'

Sentry.init({ dsn: 'https://3333a73f1d6544b0926f10bd5835c690@sentry.io/5178520' });

function lambdaHandler(event, context) {
  console.log(`EVENT: \n${  JSON.stringify(event, null, 2)}`)
  console.log(event.bad.bad.bad)
  return context.logStreamName
}

export const handler = sentryHandler(lambdaHandler)
