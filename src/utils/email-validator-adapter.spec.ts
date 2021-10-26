import { EmailValidatorAdapter } from './email-validator-adapter'
import validator from 'validator'

jest.mock('validator', () => ({
  isEmail (): boolean {
    return true
  }
}))

describe('EmailValidator Adapter', () => {
  it('Should return false if validator returns false', () => {
    const sut = new EmailValidatorAdapter()
    jest.spyOn(validator, 'isEmail').mockReturnValueOnce(false)
    const isValid = sut.isValid('invalid_email@mail.com')
    expect(isValid).toBeFalsy()
  })

  it('Should return true if validator returns true', () => {
    const sut = new EmailValidatorAdapter()
    const isValid = sut.isValid('valid_email@mail.com.br')
    expect(isValid).toBeTruthy()
  })

  it('Should call isEmail function with correct param', () => {
    const sut = new EmailValidatorAdapter()
    const isEmailSpyOn = jest.spyOn(validator, 'isEmail')
    sut.isValid('valid_email@mail.com.br')
    expect(isEmailSpyOn).toHaveBeenCalledWith('valid_email@mail.com.br')
  })
})
