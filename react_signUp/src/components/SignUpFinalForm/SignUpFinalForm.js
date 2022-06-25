import React from 'react';
import { Form, Field } from 'react-final-form';

import classes from './SignUpFinalForm.module.scss';

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

  onSubmit(...args) {}

  render() {
    return (
      <>
        <Form
          onSubmit={this.onSubmit}
          validate={(values) => this.combineValidators(values)}
          render={({ handleSubmit, form, submitting, pristine, touched }) => (
            <form onSubmit={handleSubmit} className={classes['sign-form']}>
              {Object.entries(fields).map(([fieldName, fieldValue]) => {
                const { title, type, name, placeholder } = fieldValue;
                return (
                  <Field name={name} key={fieldName}>
                    {({ input, meta }) => (
                      <div>
                        <label>{title}</label>
                        <input
                          {...input}
                          type={type}
                          placeholder={placeholder}
                        />
                        {meta.error && meta.touched && (
                          <div className={classes.error}>{meta.error}</div>
                        )}
                      </div>
                    )}
                  </Field>
                );
              })}
              <div className={classes.container}>
                <button
                  type="button"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Reset
                </button>
                <button type="submit" disabled={submitting || pristine}>
                  Submit
                </button>
              </div>
            </form>
          )}
        />
      </>
    );
  }
}
export default SignUpFinalForm;
