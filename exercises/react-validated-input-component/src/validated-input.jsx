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
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    const passFail = this.checkValidInput(this.state.value);
    if (passFail) {
      this.setState({ isValid: true });
    }
    this.setState({ isValid: false });
  }
  checkValidInput(input) {
    if (!input) {
      this.setState({ errMsg: 'Password is required' });
      return false;
    } else if (input.length < 8) {
      this.setState({ errMsg: 'Password must be at least 8 characters' });
      return false;
    } else {
      return true;
    }
  }
  render() {
    const iconClass = this.state.isValid ? 'fa-check' : 'fa-times';
    return(
      <div className="container">
        <form onSubmit={ this.handleSubmit }>
          <label>
            Password: 
          </label>
          <input type="text" name="password" id="password" onChange={ this.handleChange } />
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