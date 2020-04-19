import * as aws from 'aws-sdk'
import { requestParameters } from './params/requestParameters'

export const sendEmail = async () => {
  aws.config.update({ region: 'us-east-1' })

  const ses = new aws.SES()

  const res = await ses.sendEmail(requestParameters).promise()

  return res
}
