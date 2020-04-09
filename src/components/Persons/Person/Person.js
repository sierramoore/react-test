import React, {Component} from 'react'; // not using a class that extends from {Component}
// state is only avaliable with components that extend {Component}
import PropTypes from 'prop-types';
import Aux from '../../../hoc/Aux'
import withClass from "../../../hoc/withClass";
import classes from './Person.module.css';
import AuthContext from '../../../context/auth-context';


// props.children is: <Person> anything here is props.children </Person>
class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
        //createRef is any obj
    }

    static contextType = AuthContext; //better way to use context in class based components so you can use outside of JSX when using <AuthContext.Consumer> * cant use in functional components but can do with useContext hook

    componentDidMount() {
        this.inputElementRef.current.focus();
    }


    render(){
        return (
            <Aux>
                {this.context.authenticated ?  <p>Authenticated</p> : <p>Please log in</p>}

                <p onClick={this.props.click}>
                    I'm {this.props.name} and I'm {this.props.age} years old.</p>
                <p>{this.props.children}</p>
                <input type="text"
                       ref={this.inputElementRef}
                       onChange={this.props.changed}
                       value={this.props.name}/>
            </Aux>

        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func,
}

export default withClass(Person, classes.Person);

// can return and array of html elements *comma seperated* and make sure to assign key

// if class based component (extending component) then use this.props syntax

// props.children refer to any elements(including plain text) between opening and closind tag of component

// bc passed an on click function into person component in App.js can reference it here with props.click

// static = means it can be accessed from outside (wo the need to instantiate the obj based on this class first)

// context is all about managing data across components wo the need to pass props down multiple components
