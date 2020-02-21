import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    <form onSubmit={ this.handleSubmit }>
      <label>
        Password: 
      </label>
      <input type="text" name="password" id="password" onChange={ this.handleChange } />
      <input type="submit" name="submit" />
    </form>
  }
}