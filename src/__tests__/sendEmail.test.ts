import { sendEmail } from '../sendEmail'
import expectedResponse from '../__mocks__/mockAWSResponse'

describe('Index tests', () => {
  it('responds with expected string with valid params', async () => {
    const res = await sendEmail({
      emailAddress: 'test@me.com',
      message: 'hello',
    })
    expect(res).toStrictEqual(expectedResponse)
  })
})
