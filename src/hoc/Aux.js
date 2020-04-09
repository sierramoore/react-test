// import React from 'react';

// alternative to div that makes no html element in DOM

const aux = props => props.children;
// props.children is anything between opening and closing tag of this wrapping component

export default aux;

// built in with react v 16.2+ is <React.fragment> instead
