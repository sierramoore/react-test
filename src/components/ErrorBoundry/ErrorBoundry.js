import React, {Component} from 'react';


// it is made to wrap around any component that might throw any error you cant control for
// move component in which it is wrapped key attribute to ErrorBoundry bc keys always need to be in the parent element in a mapped menthod
// wont show properly in dev mode bc react errors override
class ErrorBoundry extends Component {
    state = {
        hasError: false,
        errorMsg: ''
    };

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true, ErrorMsg: error})
    }

    render() {
        if(this.state.hasError){
            return <h1>{this.state.errorMsg}</h1>
        } else {
            return this.props.children; // whatever is in errorBoundry
        }

    }
}

export default ErrorBoundry;
