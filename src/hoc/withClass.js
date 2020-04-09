import React from 'react';

const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    )
}

export default withClass;

// function that returns a functional component
// passed unkown props in spread operator
