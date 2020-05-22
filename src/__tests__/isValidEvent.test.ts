import { isValidEvent } from '../validators/isValidEvent'

describe('isValidEvent tests', () => {
  it('responds truthy for valid payload', async () => {
    const res = isValidEvent({
      details: { emailAddress: 'test@me.com', message: 'hello' },
    })
    expect(res).toEqual(true)
  })
  it('response false with invalid payload', async () => {
    // @ts-ignore
    const res = isValidEvent({ foo: 'bar' })
    expect(res).toEqual(false)
  })
})
