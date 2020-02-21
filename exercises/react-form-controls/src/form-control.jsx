import React from 'react';

class NewsLetterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
  }
  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" onChange={ this.handleChange } />
        <input type="submit" name="submit" id="submit" value="Submit" />
      </form>
    )
  }
}

export default NewsLetterForm;