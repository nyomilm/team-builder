import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Forms from './Components/Forms';
import Members from './Components/Members';
import {MembersList} from './Components/MembersList';


function App() {
  const [members, setMembers] = useState(MembersList);

  const addNewMember =member => {
    member.id = members.lenth + 1;
    setMembers([...members, member]);
  };
  return (
    <div className="App">
      {
        members.map((person, id) =>(
          <Member name={person.name} email={person.email} role={person.role} key={id} /> 
        ))
  
      }
      <Form addToMember={addToMember}/>
      </div>
      );
      }
export default App;
