import { Handler } from 'aws-lambda'
import { sendEmail } from './sendEmail'
import { isValidEvent } from './validators/isValidEvent'
import { invalidDataSupplied } from './responses/invalidDataSupplied'

type EmailEvent = {
  details: {
    text: string
  }
}

const handler: Handler = async (event: EmailEvent) => {
  if (!isValidEvent(event)) return invalidDataSupplied
  const params = event.details
  console.log(params)
  return await sendEmail()
}

export { handler, EmailEvent }
