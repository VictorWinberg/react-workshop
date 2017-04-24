import React from 'react';
import logo from './logo.svg';

// Create a component called "Hello" that renders "Hello world"
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
      </div>
    )
  }
}

const Hello = () => <span>Hello World</span>;

export default App;
