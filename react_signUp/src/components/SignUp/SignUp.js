import React from 'react';
import classes from './SignUp.module.css';

import initialState from './utils/initialState';

class SignUp extends React.Component {
  constructor() {
    super();
    const { fields } = initialState;
    this.state = { fields };
  }

  handleValueChange = (event) => {
    const { value, name } = event.target;
    const { validator } = this.state.fields[name];

    const password = undefined || this.state.fields.password.value;
    const error = validator(value, password);

    this.setState({
      fields: {
        ...this.state.fields,
        [name]: { ...this.state.fields[name], value: value, error },
      },
    });
  };

  handleErrors = () => {
    const isError = Object.values(this.state.fields)
      .map((field) => field.error)
      .some((error) => error);
    console.log(isError);
    return isError;
  };

  handleReset = () => {
    const { fields } = initialState;
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
          {Object.entries(fields).map((field, index) => {
            return (
              <label name={field[0]} key={index}>
                <input
                  title={field[1].title}
                  type={field[1].type}
                  name={field[1].name}
                  value={field[1].value}
                  placeholder={field[1].placeholder}
                  onChange={this.handleValueChange}
                />
                <div className={classes.error}>{field[1].error}</div>
              </label>
            );
          })}

          <div className={classes.container}>
            <button onClick={this.handleReset}>Reset</button>
            <button type="submit" disabled={this.handleErrors()}>
              Submit
            </button>
          </div>
        </form>
      </>
    );
  }
}
export default SignUp;
