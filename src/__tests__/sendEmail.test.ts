import { sendEmail } from '../sendEmail'
import expectedResponse from '../__mocks__/mockAWSResponse'

describe('Index tests', () => {
  it('responds with expected string with valid params', async () => {
    const res = await sendEmail({
      emailAddress: 'test@me.com',
      message: 'hello',
    })
    console.log(res)
    console.log(expectedResponse)
    expect(JSON.stringify(res)).toEqual(JSON.stringify(expectedResponse))
  })
})
