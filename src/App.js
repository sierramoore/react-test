import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Im a react app</h1>
        <Person name="Sierra" age="24"/>
        <Person name="Roma" age="3"/>
        <Person name="Felix" age="13">My hobbies are: Watching the hobbit</Person>
      </div>
    );

    // same as above
    // return React.createElement('div', null, React.createElement('h1', null, 'hello roma', ' again'));
  }
}

export default App;
