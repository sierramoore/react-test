import React, {Component} from 'react';
import Person from "./Person/Person";

class Persons extends Component {
  // static getDerivedStateFromProps(props, state){
  //     console.log('[Persons.js] getDerivedStateFromProps');
  //     return state;
  // }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
      console.log('[Persons.js] shouldComponentUpdate');
      // if persons props doesnt change (returns true when compared to possible updated person) THEN dont re-render
      return nextProps.persons !== this.props.persons;
      // runs bc created a copy of all persons original data was created. if didnt create copy and the reference would still point to the same persons obj in memory and even if a prop was changed on persons it would still still be referenced to the same old original and checking here to see if it updates wouldnt work bc its not deeply comparing it
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
      console.log('[Persons.js] getSnapshotBeforeUpdate');
      return {message: 'snapshot'};
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
      console.log('[Persons.js] componentDidUpdate');
      console.log(snapshot)
  }

    render() {
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={e => this.props.changed(e, person.id)}
        />
      );
    });
  }
}

export default Persons;
