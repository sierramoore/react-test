import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';
import ErrorBoundry from "./ErrorBoundry/ErrorBoundry";

class App extends Component {
    // state can only be accessed in classed based components
  state = {
    persons: [
      { id: 'a', name: 'Sierra', age: 24},
      { id: 'b', name: 'Roma', age: 4},
      { id: 'c', name: 'Felix', age: 14}
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

  nameChangedHandler = (e, id) => {
      // update state for respective input field being typed

      // grab the person
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id; // return true or false if its the element you were looking for
      });

      // get the person at the index just fetched above ^ (using spread op to not mutate original data)
      const person = {
          ...this.state.persons[personIndex]
      };
      // other way than spread operator
      // const person = Object.assign({}, this.state.persons[personIndex])

      person.name = e.target.value; // using copy from above

      // update array
      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState( {persons: persons});

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
        let persons = null; // set default state

        let btnClasses = '';

        if (this.state.showPerson) { // if the state changes
            // set persons variable to contain all of persons 'html' to render
            // it will render bkus {persons} is referenced inside the below return statement

            // index param is passed in automatically with arrow fn at beginning
            // key is default prop that helps update efficiently in dom
            // index is not a good key(unique identifier) because it will change each time a person is deleted

            // changed gets executed on an onChange event, in beginning of prop grab event obj
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <ErrorBoundry key={person.id}><Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            changed={(e) => this.nameChangedHandler(e, person.id)}/></ErrorBoundry>
                    })}
                </div>
            );

            btnClasses = classes.orange;

        }

        // let classes = ['orange', 'bold'].join(' '); // turn array of strings into one string of space seperated class names
        let assignedClasses = [];
        if(this.state.persons.length >= 2) {
            assignedClasses.push(classes.orange)
        }
        if(this.state.persons.length <= 1) {
            assignedClasses.push(classes.bold)
        }

        return (
                <div className={classes.App}>
                    <h1 className={assignedClasses.join(' ')}>Im a react app</h1>
                    <button
                        className={btnClasses}
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
