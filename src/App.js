import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import { render } from '@testing-library/react';
import UserInput from './Person/UserInput';
import UserOutput from './Person/UserOutput';
import Radium, { StyleRoot } from 'radium';


class App extends Component {

  state = {
    personArray :[
      {id:"01", name: "Harsh", Age: 21},
      {id:"02", name: "Rajendra", Age: 23},
      {id:"03", name: "Yashika", Age: 26},
    ],
    otherstate: "no one messes with me",
    showPersons: false
  }
  
  switchNameHandler = (newName) => {
    this.setState({
      personArray :[
        {name: newName, Age: 21},
        {name: "Akanksha", Age: 25},
        {name: "Yashika", Age: 26},
      ]
    });
  }
  
  nameChangeHandler = (event, id) => {
  
    const personIndex = this.state.personArray.findIndex((p) => {
      return p.id === id;
    });
  
    const person = {...this.state.personArray[personIndex]};
  
    person.name = event.target.value;
  
    const persons = [...this.state.personArray];
    persons[personIndex] = person;
  
    this.setState({
      personArray: persons
    });
  }
  
  toggleSwitchHandler = () => {
     const currentValue = this.state.showPersons;
     this.setState({
      showPersons: !currentValue
     });
  }
  
  deletePersonHandler = (index) => {
    const persons = [...this.state.personArray];
    persons.splice(index,1);
    this.setState({
      personArray:persons
    })
  }

  render() {

    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightGreen',
        color: 'black'
      }
    }

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.personArray.map((person,index) => {
              return <Person friend1={person.name}
              Age1={person.Age}
              deletePerson={this.deletePersonHandler.bind(this, index)}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
        </div> 
      );

      style.backgroundColor = 'red';
      style[':hover']= {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];
    if(this.state.personArray.length <=2) {
      classes.push('red');
    }

    if(this.state.personArray.length <=1) {
      classes.push('bold');
    }

    return(
      <StyleRoot>
        <div className="App">
          <h1>hello</h1>
          <p className={classes.join(' ')}>I live in United States, Texas</p>
          <button 
          style={style}
          onClick={this.toggleSwitchHandler}>switch name</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);