import React, {useEffect} from 'react';
import classes from "../../components/Cockpit/Cockpit.module.css";

const cockpit = (props) => {

    useEffect(() =>{ //exectues for every render cycle (like componentDidMount and componentDidUpdate in one)
        console.log('[Cockpit.js] useEffect');

        const timer = setTimeout(() => {
            console.log('fake http req')
        }, 1000);

        return () => { // return run when unMounts
            clearTimeout(timer);
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    },[]); //(just like componentDidMount if just add []. by running ONLY when the component gets unMounted)

    useEffect(() =>{
        console.log('[Cockpit.js] 2nd useEffect');
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
                className={btnClasses}
                onClick={props.clicked}>Display People
            </button>
        </div>
    )
};

export default React.memo(cockpit);
// React.memo will store snapshot of componet and only if its input changes will it re-render
