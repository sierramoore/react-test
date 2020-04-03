import React from 'react';
import classes from "../../components/Cockpit/Cockpit.module.css";

const cockpit = (props) => {
    let assignedClasses = [];
    let btnClasses = '';

    if(props.showPerson){
        btnClasses = classes.orange;
    }

    if(props.persons.length >= 2) {
        assignedClasses.push(classes.orange)
    }
    if(props.persons.length <= 1) {
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

export default cockpit;
