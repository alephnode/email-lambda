import { EmailEvent } from '../index'

export const isValidEvent = (evt: EmailEvent): boolean =>
  Boolean(typeof evt === 'object' && evt.details && evt.details.text)
