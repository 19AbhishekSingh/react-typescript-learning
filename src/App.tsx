import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import ButtonClick from './components/ButtonClick';
import Container from './components/Container';

function App() {
  const personName = {
    firstName : 'John',
    lastName: 'Doe'
  }
  const carData = [
    { name: "Toyota Camry", model: "XLE", year: 2021 },
    { name: "Honda Accord", model: "Touring", year: 2022 },
    { name: "Ford Mustang", model: "GT", year: 2020 },
    { name: "Chevrolet Malibu", model: "Premier", year: 2019 },
    { name: "Tesla Model S", model: "Long Range", year: 2023 }
  ];
  
  return (
    <div className="App">
      <Greet name="john"  messageCount = {20}
      isLoggedIn = {false}
      />

      <Person name= {personName}/>
      <PersonList names={carData}/>
      <Status status ="loading"/>
      <ButtonClick handleClick={()=>{
        console.log("clicked")
      }}/>
      <Container styles={{
             color:"red",border: "1px solid black"
        }}/>
    </div>
  );
}  

export default App;
