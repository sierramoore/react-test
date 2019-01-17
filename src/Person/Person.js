import React from 'react'; // not using a class that extends from {Component}
// state is only avaliable with components that extend {Component}

// props.children is: <Person> anything here is props.children </Person>
const person = (props) => {
  return (
      <div>
          <p>I'm {props.name} and i am {props.age} years old. I like number {Math.floor(Math.random() * 33 )}</p>
          <p>{props.children}</p>
      </div>

  )
};

export default person;

