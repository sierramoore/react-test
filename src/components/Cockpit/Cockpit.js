import React, {useEffect, useRef, useContext} from 'react';
import classes from "../../components/Cockpit/Cockpit.module.css";
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);


    useEffect(() =>{ //exectues after every render cycle (like componentDidMount and componentDidUpdate in one)
        console.log('[Cockpit.js] useEffect');

        // calling here so ensured its already defined and created
        toggleBtnRef.current.click();

        return () => { // return run when unMounts
            // clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    },[]); //(just like componentDidMount if just add []. by running ONLY when the component gets unMounted)

    useEffect(() =>{
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    }); // runs on EVERY update cycle is NO arg

    let assignedClasses = [];
    let btnClasses = '';

    if(props.showPerson){
        btnClasses = classes.orange;
    }

    if(props.personsLength >= 2) {
        assignedClasses.push(classes.orange)
    }
    if(props.personsLength <= 1) {
        assignedClasses.push(classes.bold)
    }

    return (
        <div className={classes.Cockpit}>

            <h1>{props.title}</h1>
            <h1 className={assignedClasses.join(' ')}>Im a react app</h1>
            <button
                ref={toggleBtnRef}
                className={btnClasses}
                onClick={props.clicked}>Display People
            </button>
            <button onClick={authContext.login}>log in</button>
        </div>
    )
};

export default React.memo(cockpit);
// React.memo will store snapshot of componet and only if its input changes will it re-render
