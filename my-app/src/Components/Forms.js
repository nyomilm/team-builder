import React, {useState} from 'react';

const Form = (props) => {
    const [formEntry, setformEntry] = useState({ 
        name: "", 
        email: "",
        role: "",
     });

     const handleChange = event => {
        setformEntry({ ...formEntry, [event.target.name]: event.target.value });

     const handleSubmit = event => {
        event.preventDefault();
        console.log(user.name);
        console.log(user.email);
        console.log(user.role);
      };
}