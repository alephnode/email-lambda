import { Handler } from 'aws-lambda'
import { sendEmail } from './sendEmail'
import { isValidEvent } from './validators/isValidEvent'
import { invalidDataSupplied } from './responses/invalidDataSupplied'

type EmailEvent = {
  details: {
    emailAddress: string
    message: string
  }
}

const handler: Handler = async (event: EmailEvent) => {
  if (!isValidEvent(event)) return invalidDataSupplied
  const params = event.details
  return await sendEmail(params)
}

export { handler, EmailEvent }
