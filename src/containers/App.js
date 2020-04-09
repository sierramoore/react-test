import React, { Component } from 'react';
// import classes from '../components/Cockpit/Cockpit.module.css';

import classes from '../containers/App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'
import withClass from "../hoc/withClass";
import Aux from '../hoc/Aux';
import AuthContext from '../context/auth-context';


class App extends Component {
  state = {
    persons: [
      { id: 'a', name: 'Sierra', age: 24},
      { id: 'b', name: 'Roma', age: 4},
      { id: 'c', name: 'Felix', age: 14}
    ],
      otherState: 'some other value',
      showPerson: false,
      showCockpit: true,
      authenticated: false
  };

  deletePersonHandler = (personIndex) => {
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({persons: persons}) // update the ppl in new state
  };

  nameChangedHandler = (e, id) => {
      // grab the person
      const personIndex = this.state.persons.findIndex(p => {
        return p.id === id; // return true or false if its the element you were looking for
      });

      // get the person at the index just fetched above and make copy to not mutate original data)
      const person = {
          ...this.state.persons[personIndex]
      };
      person.name = e.target.value;

      // update array
      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState( {persons: persons});
  };

  togglePersonHandler = () => {
      const doesShow = this.state.showPerson; // current state(false)
      this.setState({showPerson: !doesShow}); // change state to opposite of what current state is
  };

  loginHandler = () => {
      this.setState({authenticated: true})
  }

  render() {
      let persons = null; // set default state
      if (this.state.showPerson) {
          persons = (
              <Persons
                  persons={this.state.persons}
                  clicked={this.deletePersonHandler}
                  changed={this.nameChangedHandler}
                  isAuthenticated={this.state.authenticated}/>
          );
      }

      return (
          <Aux>
              <button onClick={() => {
                  this.setState({showCockpit: false})}}
              >Remove Cockpit</button>

              <AuthContext.Provider value={{
                  authenticated: this.state.authenticated,
                  login: this.loginHandler}}>

                {this.state.showCockpit ?   <Cockpit
                    title={this.props.appTitle}
                    showPersons={this.state.showPerson}
                    personsLength={this.state.persons.length}
                    clicked={this.togglePersonHandler}
                /> : null}

                {persons}
              </AuthContext.Provider>

          </Aux>
      );
  }
}

export default withClass(App, classes.App);

// in btn call an anyonmus function that returns switchNameHandler() function call..
// when using arrow function syntax it implicity applies the return keyword directly after '=>' if its in one line if not in one line then wrap in curly braces

// add a prop to determine true or false  (display person or not)
// wrapped 'html Person(s)' in a div with a terinary if statement, if true display else null (dont show)

// setState is not guarenteed to rerender instantly (so if using something like counters, return and update prevState first)

// react only re-renders when props or state changes
