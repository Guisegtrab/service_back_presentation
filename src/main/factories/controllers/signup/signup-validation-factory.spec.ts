import { makeSignUpValidation } from './signup-validation-factory'
import { ValidationComposite } from '../../../../validation/validators/validation-composite'
import { RequiredFieldValidation } from '../../../../validation/validators/required-field-validation'
import { Validation } from '../../../../presentation/protocols/validation'
import { CompareFieldsValidation } from '../../../../validation/validators/compare-fields-validation'
import { EmailValidation } from '../../../../validation/validators/email-validation'
import { EmailValidator } from '../../../../validation/protocols/email-validator'

jest.mock('../../../../validation/validators/validation-composite')

const makeEmailValidator = (): EmailValidator => {
  class EmailValidatorStub implements EmailValidator {
    isValid (email: string): boolean {
      return true
    }
  }
  return new EmailValidatorStub()
}

describe('SignUpValidation Factory', () => {
  test('Deve chamar ValidationComposite com todas as validações', () => {
    makeSignUpValidation()
    const validations: Validation[] = []
    for (const field of ['name', 'email', 'password', 'passwordConfirmation']) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new CompareFieldsValidation('password', 'passwordConfirmation'))
    validations.push(new EmailValidation('email', makeEmailValidator()))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
