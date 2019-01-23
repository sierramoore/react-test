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
    ],
      otherState: 'some other value'
  };

  switchNameHandler = (newName) => {
      // dont use mutate state directly like: this.state.prop = 'something'
      // setState takes an obj as an arg
       this.setState({
           persons: [
               { name: newName, age: 24},
               { name: 'Romchick', age: 4},
               { name: 'Felixchick', age: 15}
           ]
       })
  };

  render() {
    return (
      <div className="App">
        <h1>Im a react app</h1>
        <button onClick={() => this.switchNameHandler('new name Sierra')}>Switch name</button>
        <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
        />
        <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Sierrachka!!')}
        />
        <Person name={this.state.persons[2].name}
                age={this.state.persons[2].age}>
            My hobbies are: Watching the hobbit
        </Person>
      </div>
    );
  }
}

export default App;

// in btn call an anyonmus function that returns switchNameHandler() function call..
// when using arrow function syntax it implicity applies the return keyword directly after '=>' if its in one line if not in one line then wrap in curly braces