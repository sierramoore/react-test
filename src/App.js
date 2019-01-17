import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    // state can only be accessed in classed based components
  state = {
    persons: [
      { name: 'Sierra', age: 24},
      { name: 'Roma', age: 4},
      { name: 'Felix', age: 14}
    ]
  };

  switchNameHandler = () => {
       console.log('was clicked')
  };

  render() {
      console.log(this.state.persons[0].name)
    return (
      <div className="App">
        <h1>Im a react app</h1>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons.age[0]} />
        <Person name={this.state.persons[1].name} age={this.state.persons.age[1]} />
        <Person name={this.state.persons[2].name} age={this.state.persons.age[2]}>My hobbies are: Watching the hobbit</Person>
      </div>
    );
  }
}

// same as above
// return React.createElement('div', null, React.createElement('h1', null, 'hello roma', ' again'));

export default App;
