import React, { Component } from 'react';
import classes from './App.module.css';
import Person from './Person/Person';



class App extends Component {

  state = {
    persons: [

      { id: 'bb', name: "max", age: 29000 },
      { id: 'bh', name: "Manu", age: 23 },
      { id: 'hvhv', name: "Stephen", age: 180 },


    ],
    otherState: 'Other states',
    showPersons: false

  };

  switchNameHandler = (newName) => {
    console.log('Pressed');
    this.setState({
      persons: [

        { name: "Max", age: 290 },
        { name: "Manu", age: 23 },
        { name: "Stephen", age: 180 },


      ]
    })
  }

  nameChangeHandler = (event, id) => {
    // console.log('Pressed');
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;

    });
    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons })
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.splice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }
  togglePersonHandler = (event) => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }





  render() {

 


    let persons = null;

    let btnClass = '';
    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />

          })}

        </div>
      );
      btnClass= classes.Red;

    }
    let assingedClasses = [];
    if (this.state.persons.length <= 2) {
      assingedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1) {
      assingedClasses.push(classes.bold);
    }

    return (
      // <StyleRoot>
      <div className={classes.App}>
        <h1>Hi I'm a React App</h1>
        <p className={assingedClasses.join(' ')}>This is really working</p>
        <button className={btnClass}
          onClick={this.togglePersonHandler}>
          Toggle Person
        </button>
        {persons}
      </div>
      // </StyleRoot>
    );

    // return React.createElement('div',{className : 'App'},React.createElement('h1',null,'Does this work now') )

  }
}

export default App;
