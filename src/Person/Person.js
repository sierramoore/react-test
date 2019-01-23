import React from 'react'; // not using a class that extends from {Component}
// state is only avaliable with components that extend {Component}
import './Person.css'

// props.children is: <Person> anything here is props.children </Person>
const person = (props) => {
  return (
      <div className="Person">
          <p onClick={props.click}>I'm {props.name} and i am {props.age} years old. I like number {Math.floor(Math.random() * 33 )}</p>
          <p>{props.children}</p>
          <input type="text" onChange={props.changed} value={props.name}/>
      </div>

  )
};

export default person;

// if class based component (extending component) then use this.props syntax

// props.children refer to any elements(including plain text) between opening and closind tag of component

// bkus passed an on click function into person component in App.js can reference it here with props.click
