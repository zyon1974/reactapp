import react, { Component } from 'react';

class App extends Component {
  state = {
    count: 0
  };

  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  }

  render() {
    return (
      <div>
        <h2>react counter</h2>
        <button onClick={this.increment}>clicked {this.state.count}</button>
      </div>
    );
  }
}

export default App;
