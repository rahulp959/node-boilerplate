export async function handler(event, context) {
  console.log(`EVENT: \n${  JSON.stringify(event, null, 2)}`)
  return context.logStreamName
}