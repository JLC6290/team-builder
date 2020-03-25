import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';

const initialTeam = [
  {id: uuid(), fName: 'James', lName: 'Clark', role: 'Team Lead'},
  {id: uuid(), fName: 'Jack', lName: 'Bean', role: 'Engineer'},
  {id: uuid(), fName: 'Jill', lName: 'Stalk', role: 'Engineer'},
]
function App() {

  const [teamNames, setTeamNames] = useState(initialTeam);
  const [formValues, setFormValues] = useState({
    fName: '',
    lName: '',
    role: '',
  });

  const onInputChange = event => {
    const inputThatChanged = event.target.fName
    const newValueForInput = event.target.value
    setFormValues({
      ...formValues,
      [inputThatChanged]: newValueForInput,
    })
  }
  const onFormSubmit = event => {
    event.preventDefault();
    const newTeamMember = {
      id: uuid(),
      fName: formValues.fName,
      lName: formValues.lName,
      role: formValues.role,
    }
    setTeamNames([...teamNames, newTeamMember])
  }

  return (
    <div className="App">
      <Form 
        onInputChange={onInputChange}
        formValues={formValues}
        onFormSubmit={onFormSubmit}
      />
      <h3>Team List</h3>
      {
        teamNames.map(team => <div key={team.id}>{team.fName} {team.lName} - {team.role}</div>)
      }

    </div>
  );
}

function Form(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <label> First Name
        <input
          onChange={props.onInputChange}
          value={props.formValues.fName}
          name='fName'
          type='text'
          />
      </label><br/>

      <label> Last Name
        <input 
          onChange={props.onInputChange}
          value={props.formValues.lName}
          name='lName'
          type='text'
          />
      </label><br/>
      <input type='submit' />
    </form>
  )
}

export default App
