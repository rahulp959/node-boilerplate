import { handler } from '.'

describe('Index Handler', () => {
  it('should return the log stream name from context', async () => {
    const event = {};
    const context = {
      logStreamName: 'test'
    }
    const response = await handler(event, context);

    expect(response).toBe('test')
  })
})