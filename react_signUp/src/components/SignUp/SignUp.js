import React from 'react';
import classes from './SignUp.module.scss';

import fields from './utils/initialState';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = { fields };
  }

  handleValueChange = (event) => {
    const { value, name } = event.target;
    const { fields } = this.state;
    const { validator } = fields[name];

    const password = fields.password.value;
    const error = validator(value, password);

    this.setState({
      fields: {
        ...fields,
        [name]: { ...fields[name], value: value, error },
      },
    });
  };

  getFormError = () => {
    const { fields } = this.state;

    const isError = Object.values(fields)
      .map((field) => field.error)
      .some((error) => error);

    return isError;
  };

  handleReset = () => {
    this.setState({ fields });
  };

  handleSubmit(event) {
    event.preventDefault();
    // some code
  }

  render() {
    const { fields } = this.state;
    return (
      <>
        <form onSubmit={this.handleSubmit} className={classes['sign-form']}>
          {Object.entries(fields).map(([fieldName, fieldValue]) => {
            const { title, type, name, value, placeholder, error } = fieldValue;
            return (
              <div key={fieldName}>
                <label name={fieldName} htmlFor={name}>
                  {title}
                </label>
                <input
                  id={name}
                  title={title}
                  type={type}
                  name={name}
                  value={value}
                  placeholder={placeholder}
                  onChange={this.handleValueChange}
                />
                <div className={classes.error}>{error}</div>
              </div>
            );
          })}
          <div className={classes.container}>
            <button onClick={this.handleReset}>Reset</button>
            <button type="submit" disabled={this.getFormError()}>
              Submit
            </button>
          </div>
        </form>
      </>
    );
  }
}
export default SignUp;
