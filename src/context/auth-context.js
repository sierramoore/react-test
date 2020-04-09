import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    login: () => {}
});

export default authContext;

//context can be a more globally avaliable js value
