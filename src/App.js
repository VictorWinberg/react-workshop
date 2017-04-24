import React from 'react';
import logo from './logo.svg';

// Create a component called "Hello" that renders "Hello world"
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello /> with <Name first="Victor" last="Winberg" />
      </div>
    )
  }
}

const Hello = () => <span>Hello World</span>;

class Name extends React.Component {
  render() {
    return <span>{ this.props.first } { this.props.last }</span>;
  }
}

export default App;
