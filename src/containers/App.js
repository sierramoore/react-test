import React, { Component } from 'react';
// import classes from '../containers/App.module.css';
import classes from '../components/Cockpit/Cockpit.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'



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
        let persons = null; // set default state

        if (this.state.showPerson) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}/>
            );
        }

        return (
                <div className={classes.App}>
                    <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPerson}
                    persons={this.state.persons}
                    clicked={this.togglePersonHandler}/>
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
