import React from 'react';
import { Form, Field } from 'react-final-form';

import {
  StyledButton,
  StyledButtonContainer,
  StyledInput,
  StyledError,
  StyledForm,
} from './styles/styles';

import fields from '../../constants';
import { validators } from '../../utils';

class SignUpFinalForm extends React.Component {
  combineValidators = (values) => {
    let password = '';
    const result = Object.entries(values).reduce(
      (errorAccumulator, [fieldName, value]) => {
        if (fieldName === 'password') {
          password = value;
        }
        errorAccumulator[fieldName] = validators[fieldName](value, password);
        return errorAccumulator;
      },
      {}
    );
    return result;
  };

  onSubmit(values) {
    console.log(values);
  }

  render() {
    return (
      <>
        <Form
          onSubmit={this.onSubmit}
          validate={(values) => this.combineValidators(values)}
          render={({ handleSubmit, form, submitting, pristine }) => (
            <StyledForm onSubmit={handleSubmit}>
              {Object.entries(fields).map(([fieldName, fieldValue]) => {
                const { title, type, name, placeholder } = fieldValue;
                return (
                  <Field name={name} key={fieldName}>
                    {({ input, meta }) => (
                      <div>
                        <label>{title}</label>
                        <StyledInput
                          {...input}
                          type={type}
                          placeholder={placeholder}
                        />
                        {meta.error && meta.touched && (
                          <StyledError>{meta.error}</StyledError>
                        )}
                      </div>
                    )}
                  </Field>
                );
              })}
              <StyledButtonContainer>
                <StyledButton
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </StyledButton>
                <StyledButton type="submit" disabled={submitting || pristine}>
                  Submit
                </StyledButton>
              </StyledButtonContainer>
            </StyledForm>
          )}
        />
      </>
    );
  }
}
export default SignUpFinalForm;
