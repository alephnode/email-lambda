import {
  sender,
  recipient,
  subject,
  charset,
  body_html,
  body_text,
} from './../templates/emailTemplate'

export const requestParameters = {
  Source: sender,
  Destination: {
    ToAddresses: [recipient],
  },
  Message: {
    Subject: { Data: subject, Charset: charset },
    Body: {
      Text: { Data: body_text, Charset: charset },
      Html: { Data: body_html, Charset: charset },
    },
  },
}
