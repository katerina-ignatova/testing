import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidv1 from 'uuid';
import { addArticle } from '../actions/index';

class ConnectedForm extends Component {
    state = {
      title: ''
    };

  handleCahnge = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { title } = this.state;
    const id = uuidv1();
    this.props.addArticle({ title, id });
    this.setState({ title: '' });
  };

  render() {
    const { title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title}
            onChange={this.handleCahnge}
          />
        </div>
        <button type="submit" className="btn btn-success btn-lg">SAVE</button>
      </form>
    );
  }
}

const Form = connect(null, {addArticle})(ConnectedForm);

export default Form;