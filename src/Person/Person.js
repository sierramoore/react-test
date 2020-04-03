import React from 'react'; // not using a class that extends from {Component}
// state is only avaliable with components that extend {Component}


import classes from './Person.module.css';


// props.children is: <Person> anything here is props.children </Person>
const person = (props) => {

  return (
      <div className={classes.Person}>
          <p onClick={props.click}>I'm {props.name} and i am {props.age} years old.</p>
          <p>{props.children}</p>
          <input type="text" onChange={props.changed} value={props.name}/>
      </div>

  )
};

export default person;

// if class based component (extending component) then use this.props syntax

// props.children refer to any elements(including plain text) between opening and closind tag of component

// bc passed an on click function into person component in App.js can reference it here with props.click
