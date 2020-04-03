import React from 'react'; // not using a class that extends from {Component}
// state is only avaliable with components that extend {Component}
import styled from 'styled-components';
// import './Person.css'

//styling tags instead of adding classes to them
const StyledDiv = styled.div`
      width: 60%;
      margin: 15px auto;
      border: 1px solid #eee;
      box-shadow: 0 2px 3px #ccc;
      padding: 16px;
      text-align: center;
      
      @media (min-width: 500px) {
          width: 450px;
          background-color: aliceblue;
      }
`;

// props.children is: <Person> anything here is props.children </Person>
const person = (props) => {

  return (
      // <div className="Person" style={style}>
      <StyledDiv>
          <p onClick={props.click}>I'm {props.name} and i am {props.age} years old.</p>
          <p>{props.children}</p>
          <input type="text" onChange={props.changed} value={props.name}/>
      </StyledDiv>

  )
};

export default person;

// if class based component (extending component) then use this.props syntax

// props.children refer to any elements(including plain text) between opening and closind tag of component

// bc passed an on click function into person component in App.js can reference it here with props.click
