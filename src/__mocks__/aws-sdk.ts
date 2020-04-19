import mockAWSResponse from './mockAWSResponse'

export default {
  SES: jest.fn(() => ({
    sendEmail: jest.fn().mockReturnValue({
      promise: () => Promise.resolve(mockAWSResponse),
    }),
  })),
}
