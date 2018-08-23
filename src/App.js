import React, { Component } from 'react';

import cat from './assets/images/cat.jpg';

class App extends Component {

  state = {
    name: 'Mats'
  };

  miau = () => {
    console.log(this.state.name);
  };

  handleSubmit = (e) => {
    console.log(`A name was submitted: ${this.state.name}`);
    e.preventDefault();
  };

  handleChange = (e) => {
    const name = e.target.value;
    this.setState(() => ({ name }));
  };

  // handleChange = ({ target: { value: name } }) => this.setState({ name });

  // async componentDidMount() {
  //   try {
  //     const rawResponse = await fetch('https://jsonplaceholder.typicode.com/posts');
  //     const response = await rawResponse.json();
  //     console.log(response);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  render() {
    const { name } = this.state;

    return (
      <div>
        <h1 onClick={this.miau}>This is the React test of {name}</h1>
        <img src={cat} />
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.name} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }

};

export default App;
