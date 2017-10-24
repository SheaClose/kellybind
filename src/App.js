import React, { Component } from 'react';
import logo from './logo.svg';
import Input from './Input';
import Button from './Button';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    };
    this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }

  handleSearchTermChange(e) {
    this.setState({ searchTerm: e.target.value });
  }

  handleButtonClick() {
    alert(this.state.searchTerm);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Input handleSearchTermChange={this.handleSearchTermChange} />
        <Button handleButtonClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default App;
