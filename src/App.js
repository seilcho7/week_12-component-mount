import React from 'react';
import './App.css';
import Widget from './Widget';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shouldShowWidget: false
    }
  }

  render() {
    console.log('App: render');
    return (
      <div className="App">
        <button onClick={this._toggleShowWidget}>Flip it</button>
        { this.state.shouldShowWidget ? <Widget /> : 'nada' }
      </div>
    );
  }

  componentDidMount() {
    console.log('App: componentDidMount');
  }

  componentWillUnmount() {
    console.log('App: componentWillUnmount');
  }

  _toggleShowWidget = () => {
    this.setState({
      shouldShowWidget: !this.state.shouldShowWidget
    })
  }
}

export default App;
