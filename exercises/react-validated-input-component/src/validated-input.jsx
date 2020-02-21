import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      errMsg: '',
      isValid: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    // Prevent form from sending request
    e.preventDefault();

    if (this.validateInput(this.state.value)) {
      this.setState({ isValid: true });
    }
  }
  validateInput(input) {
    // ERROR if there is no input
    if (!input) {
      this.setState({ errMsg: 'Password is required' });

    // ERROR if user enters less than 8 characters
    } else if (input.length < 8) {
      this.setState({ errMsg: 'Password must be at least 8 characters' });

    // Check for capital letters
    // ERROR if password has no capital letters
    } else if (!this.checkCaps(input)) {
      this.setState({ errMsg: 'Password must have at least 1 capital letter' });

    // Check for numbers
    // ERROR if password has no numbers
    } else if (!this.checkNum(input)) {
      this.setState({ errMsg: 'Password must have at least 1 number' });

    // Check for special characters
    // ERROR if none are found
    } else if (!this.checkSpecChar(input)) {
      this.setState({ errMsg: 'Password must have at least 1 special character' });

    // Return true and clear any error messages if the input passes all tests
    } else {
      this.setState({ errMsg: '' });
      return true;
    }
  }
  checkCaps(input) {
    const regex = /[A-Z]/;
    return regex.test(input);
  }
  checkNum(input) {
    const regex = /[0-9]/;
    return regex.test(input);
  }
  checkSpecChar(input) {
    const regex = /[-!@#$%^&*(){};:'"`~,<\.>/\\?|_]/;
    return regex.test(input);
  }
  render() {
    const iconClass = this.state.isValid ? 'fa-check' : 'fa-times';
    return(
      <div className="container">
        <form onSubmit={ this.handleSubmit }>
          <label>
            Password: 
          </label>
          <input type="password" name="password" id="password" onChange={ this.handleChange } />
          <div className="error-msg">{ this.state.errMsg }</div>
          <input type="submit" name="submit" />
        </form>
        <div className="icon-container">
          <i className={ `fas ${iconClass}` }></i>
        </div>
      </div>
    )
  }
}

export default ValidatedInput;