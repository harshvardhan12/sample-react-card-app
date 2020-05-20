import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {

    const style = {
        '@media (min-width: 500px)' : {
            width: '450px'
        }
    }

    return(
        <div className="Person" style={style}>
            <h1 onClick={props.deletePerson}>dynamic content</h1>
            <h4>Hello my name is: {props.friend1} and my age is: {props.Age1}</h4>
            <input type="text" 
            onChange={props.changed}
            value={props.friend1} />
        </div>
    );
}

export default Radium(person);