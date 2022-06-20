import React from 'react';
import classes from './SignUp.module.css';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      fields: {
        name: {
          title: 'Name',
          type: 'name',
          name: 'name',
          value: '',
          error: true,
          placeholder: 'Input your name..',
          validator: (value = '') => {
            return value.length >= 2 ? false : 'Name is too short';
          },
        },
        email: {
          title: 'Email',
          type: 'email',
          name: 'email',
          value: '',
          error: true,
          placeholder: 'Input your email..',
          validator: (value = '') => {
            return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)
              ? false
              : 'Email is invalid';
          },
        },
        password: {
          title: 'Password',
          type: 'password',
          name: 'password',
          autoComplete: 'false',
          value: '',
          error: true,
          placeholder: 'Input your password..',
          validator: (value = '') => {
            return value.match(
              /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g
            )
              ? false
              : 'Password is too simple';
          },
        },
        passwordConfirm: {
          title: 'Password confirm',
          type: 'password',
          name: 'passwordConfirm',
          autoComplete: 'false',
          value: '',
          error: true,
          placeholder: 'Confirm your password..',
          validator: (value = '', allValues) => {
            return value === allValues
              ? // return value === allValues.password
                false
              : 'Passwords dont match';
          },
        },
      },
    };
  }

  nameInputHandler = (event) => {
    let {
      fields: {
        name: { error, validator },
      },
    } = this.state;
    error = validator(event.target.value);
    this.setState({
      fields: {
        ...this.state.fields,
        name: { ...this.state.fields.name, value: event.target.value, error },
      },
    });
  };

  emailInputHandler = (event) => {
    let {
      fields: {
        email: { error, validator },
      },
    } = this.state;
    error = validator(event.target.value);
    this.setState({
      fields: {
        ...this.state.fields,
        email: { ...this.state.fields.email, value: event.target.value, error },
      },
    });
  };

  passwordInputHandler = (event) => {
    let {
      fields: {
        password: { error, validator },
      },
    } = this.state;
    error = validator(event.target.value);

    this.setState({
      fields: {
        ...this.state.fields,
        password: {
          ...this.state.fields.password,
          value: event.target.value,
          error,
        },
      },
    });
  };

  passwordConfirmInputHandler = (event) => {
    let {
      fields: {
        password: { value: password },
      },
    } = this.state;
    let {
      fields: {
        passwordConfirm: { error, validator },
      },
    } = this.state;

    error = validator(event.target.value, password);

    this.setState({
      fields: {
        ...this.state.fields,
        passwordConfirm: {
          ...this.state.fields.passwordConfirm,
          value: event.target.value,
          error,
        },
      },
    });
  };

  isErrors = () => {
    const {
      fields: {
        name: { error: nameError },
        email: { error: emailError },
        password: { error: passwordError },
        passwordConfirm: { error: passwordConfirmError },
      },
    } = this.state;
    if (nameError || emailError || passwordError || passwordConfirmError) {
      return true;
    }
    return false;
  };

  submitHandler(event) {
    event.preventDefault();
    // some code
  }

  resetHandler = () => {
    this.setState({
      fields: {
        name: { ...this.state.fields.name, value: '', error: true },
        email: { ...this.state.fields.email, value: '', error: true },
        password: { ...this.state.fields.password, value: '', error: true },
        passwordConfirm: {
          ...this.state.fields.passwordConfirm,
          value: '',
          error: true,
        },
      },
    });
    this.isErrors();
  };

  render() {
    const {
      fields: {
        name: {
          title: nameTitle,
          type: nameType,
          name: name,
          value: nameValue,
          placeholder: namePlaceholder,
          error: nameError,
        },
        email: {
          title: emailTitle,
          type: emailType,
          name: emailName,
          value: emailValue,
          placeholder: emailPlaceholder,
          error: emailError,
        },
        password: {
          title: passwordTitle,
          type: passwordType,
          name: passwordName,
          value: passwordValue,
          placeholder: passwordPlaceholder,
          error: passwordError,
        },
        passwordConfirm: {
          title: passwordConfirmTitle,
          type: passwordConfirmType,
          name: passwordConfirmName,
          value: passwordConfirmValue,
          placeholder: passwordConfirmPlaceholder,
          error: passwordConfirmError,
        },
      },
    } = this.state;
    return (
      <>
        <form onSubmit={this.submitHandler} className={classes['sign-form']}>
          <div>
            <input
              title={nameTitle}
              type={nameType}
              name={name}
              value={nameValue}
              placeholder={namePlaceholder}
              onChange={this.nameInputHandler}
            />
            {nameError && <div style={{ color: 'red' }}>{nameError}</div>}
          </div>
          <div>
            <input
              title={emailTitle}
              type={emailType}
              name={emailName}
              value={emailValue}
              placeholder={emailPlaceholder}
              onChange={this.emailInputHandler}
            />
            {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
          </div>
          <div>
            <input
              title={passwordTitle}
              type={passwordType}
              name={passwordName}
              value={passwordValue}
              placeholder={passwordPlaceholder}
              onChange={this.passwordInputHandler}
            />
            {passwordError && (
              <div style={{ color: 'red' }}>{passwordError}</div>
            )}
          </div>
          <div>
            <input
              title={passwordConfirmTitle}
              type={passwordConfirmType}
              name={passwordConfirmName}
              value={passwordConfirmValue}
              placeholder={passwordConfirmPlaceholder}
              onChange={this.passwordConfirmInputHandler}
            />
            {passwordConfirmError && (
              <div style={{ color: 'red' }}>{passwordConfirmError}</div>
            )}
          </div>
          <div className={classes.container}>
            <button onClick={this.resetHandler}>Reset</button>
            <button type="submit" disabled={this.isErrors()}>
              Submit
            </button>
          </div>
        </form>
      </>
    );
  }
}
export default SignUp;
