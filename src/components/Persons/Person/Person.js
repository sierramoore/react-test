import React, {Component} from 'react'; // not using a class that extends from {Component}
// state is only avaliable with components that extend {Component}


import classes from './Person.module.css';


// props.children is: <Person> anything here is props.children </Person>
class Person extends Component {
    render(){
        return (
            <div className={classes.Person}>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and i am
                    {this.props.age} years old.</p>

                <p>{this.props.children}</p>

                <input type="text"
                       onChange={this.props.changed}
                       value={this.props.name}/>
            </div>

        )
    }
};

export default Person;

// if class based component (extending component) then use this.props syntax

// props.children refer to any elements(including plain text) between opening and closind tag of component

// bc passed an on click function into person component in App.js can reference it here with props.click
