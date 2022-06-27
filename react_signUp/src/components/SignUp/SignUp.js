import React from 'react';

import {
  StyledButton,
  StyledButtonContainer,
  StyledInput,
  StyledError,
  StyledForm,
} from './styles/styles';

import fields from './utils/initialState';

class SignUp extends React.Component {
  state = { fields };

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
        <StyledForm onSubmit={this.handleSubmit} onReset={this.handleReset}>
          {Object.entries(fields).map(([fieldName, fieldValue]) => {
            const { title, type, name, value, placeholder, error } = fieldValue;
            return (
              <div key={fieldName}>
                <label name={fieldName} htmlFor={name}>
                  {title}
                </label>
                <StyledInput
                  id={name}
                  title={title}
                  type={type}
                  name={name}
                  value={value}
                  placeholder={placeholder}
                  onChange={this.handleValueChange}
                />
                <StyledError>{error}</StyledError>
              </div>
            );
          })}
          <StyledButtonContainer>
            <StyledButton type="reset">Reset</StyledButton>
            <StyledButton type="submit" disabled={this.getFormError()}>
              Submit
            </StyledButton>
          </StyledButtonContainer>
        </StyledForm>
      </>
    );
  }
}
export default SignUp;
