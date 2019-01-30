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

  deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice(); // fetch all ppl (create a copy with slice to NOT mutate original data)
      const persons = [...this.state.persons]; // this method works just as well as ^(with slice)
      persons.splice(personIndex, 1); // create new version of that array and remove one element from array
      this.setState({persons: persons}) // update the ppl in new state
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

        let persons = null; // set default state

        if (this.state.showPerson) { // if the state changes
            // set persons variable to contain all of persons 'html' to render
            // it will render bkus {persons} is referenced inside the below return statement

            // index param is passed in automatically with arrow fn at beginning
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}/>
                    })}
                </div>
            )
        }

        return (
            <div className="App">
                <h1>Im a react app</h1>
                <button
                    style={btnStyle}
                    onClick={this.togglePersonHandler}>Display People
                </button>
                {persons}
            </div>
        );
    }
}

export default App;

// in btn call an anyonmus function that returns switchNameHandler() function call..
// when using arrow function syntax it implicity applies the return keyword directly after '=>' if its in one line if not in one line then wrap in curly braces

// add a prop to determine true or false  (display person or not)
// wrapped 'html Person(s)' in a div with a terinary if statement, if true display else null (dont show)