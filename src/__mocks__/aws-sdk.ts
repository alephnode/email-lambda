import mockAWSResponse from './mockAWSResponse'

export const config = {
  update: jest.fn(),
}

export const SES = jest.fn(() => ({
  sendEmail: jest.fn().mockReturnValue({
    promise: () => Promise.resolve(mockAWSResponse),
  }),
}))
