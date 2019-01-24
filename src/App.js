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
      otherState: 'some other value',
      showPerson: false
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

  nameChangedHandler = (e) => {
      this.setState({
          persons: [
              { name: 'Felixchick', age: 24},
              { name: 'Romchick', age: 4},
              { name: e.target.value, age: 15}
          ]
      })
  };

  togglePersonHandler = () => {
      const doesShow = this.state.showPerson; // current state(false)
      this.setState({showPerson: !doesShow}); // change state to opposite of what current state is
  };

  render() {
      // inline-styles will be scoped to component
      const btnStyle = {
          backgroundColor: 'white',
          font: 'sans-serif',
          border: '2px solid lavender',
          padding: '8px',
          cursor: 'pointer'
      };

    return (
      <div className="App">
        <h1>Im a react app</h1>
        <button
            style={btnStyle}
            onClick={this.togglePersonHandler}>Display People</button>
       {
           this.state.showPerson ?
           <div>
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
                      age={this.state.persons[2].age}
                      changed={this.nameChangedHandler}>
                  My hobbies are: Watching the hobbit
              </Person>
          </div> : null
       }
      </div>
    );
  }
}

export default App;

// in btn call an anyonmus function that returns switchNameHandler() function call..
// when using arrow function syntax it implicity applies the return keyword directly after '=>' if its in one line if not in one line then wrap in curly braces

// add a prop to determine true or false  (display person or not)
// wrapped 'html Person(s)' in a div with a terinary if statement, if true display else null (dont show)