import React, { Component, PureComponent } from 'react';

class SimpleCounterComponent extends Component {
  state = {
    count: 0,
  };

  incrementCounter = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log('This is Simple Component');
    return (
      <div>
        <h2>Simple Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

class PureCounterComponent extends PureComponent {
  state = {
    count: 0,
  };

  incrementCounter = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  render() {
    console.log('This is Pure Component');
    return (
      <div>
        <h2>Pure Counter</h2>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCounter}>Increment</button>
      </div>
    );
  }
}

class CombinedCounterPage extends Component {
  render() {
    return (
      <div>
        <h1>Combined Counter Page</h1>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <div>
            <h2>Simple Counter Component</h2>
            <SimpleCounterComponent />
          </div>
          <div>
            <h2>Pure Counter Component</h2>
            <PureCounterComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default CombinedCounterPage;
