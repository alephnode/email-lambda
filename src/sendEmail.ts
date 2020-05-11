import * as aws from 'aws-sdk'
import { requestParameters } from './params/requestParameters'
import { EmailEvent } from './'

export const sendEmail = async (params: EmailEvent['details']) => {
  // TODO get params included in requestParameters
  aws.config.update({ region: 'us-east-1' })
  console.log(params)
  const ses = new aws.SES()

  const res = await ses.sendEmail(requestParameters).promise()

  return res
}
