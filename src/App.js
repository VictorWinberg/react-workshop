import React from 'react';
import logo from './logo.svg';

// Create a component called "Hello" that renders "Hello world"
class App extends React.Component {
  render() {
    return (
      <div>
        <Hello />
        <p>
          <Name first="Victor" last="Winberg " />
          <Likes amount="1337" />
        </p>
        <p>
          <Name first="Anton" last="Göransson " />
          <Likes amount="-3" />
        </p>
        <Fetcher url="https://api.github.com/repos/VictorWinberg/react-workshop/contents/package.json"/>
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

class Likes extends React.Component {
  constructor(props) {
    super(props);
    this.state = { likes: 0, amount: parseInt(props.amount) }
    this.updateLikes = this.updateLikes.bind(this);
  }

  updateLikes() {
    this.setState({ likes: this.state.likes + this.state.amount });
  }

  render() {
    return <span>
      likes: { this.state.likes }
      <button onClick={ this.updateLikes }>Like</button>
    </span>
  }
}

class Fetcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { json: {} };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const requestObject = {
      headers: { Accept: 'application/vnd.github.VERSION.raw' }
    };

    fetch(this.props.url, requestObject )
      .then(response => {
        if (response.ok) {
          response.json().then(json => {
            this.setState({ json: json });
          });
        } else {
          this.setState({ json: { error: 'Something went wrong...' } })
        }
    });
  }

  render() {
    return <div>
      <button onClick={ this.handleClick() }>
        Get data
      </button>
      <JsonPrinter json={ this.state.json } />
      <div className="error">
        { this.state.error }
      </div>
    </div>
  }
}

class JsonPrinter extends React.Component {
  render() {
    return <div>
      <code>
        { JSON.stringify(this.props.json) }
      </code>
    </div>
  }
}

export default App;
