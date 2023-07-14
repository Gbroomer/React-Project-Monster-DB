import '../App.css';
import React, { useEffect, useState } from "react"
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import Encounters from "./Encounters/Encounters"
// import Home from "./Home"
// import MonsterContainer from "./Monsters/MonsterContainer"
// import SpecificMonster from "./Monsters/SpecificMonster"
// import User from "./UserInfo/User"
import NavBar from "./NavBar"


function App() {

  const[monsters, setMonsters] = useState([])
  const[userLogged, setUserLogged] = useState([false])
  const[Users, setUsers] = useState([])
  const[User, setUser] = useState([])

  useEffect(() =>{
    fetch("https://www.dnd5eapi.co/api/monsters")
      .then(res => res.json())
      .then(data => setMonsters(data))
  }, [])

  useEffect(() => {
    fetch("http://localhost:3001/Users")
    .then(res => res.json())
    .then(data => setUsers(data))
  }, [])

  console.log(monsters)
  console.log(Users)

  function userLogin(input) {
    const userExists = Users.filter(user => input.name.includes(user.name)) && Users.filter(user => input.password.includes(user.password))
    if(userExists) {
      setUser(userExists)
      setUserLogged(true)
    } else {
      alert('Incorrect Username or Password')
    }
  }



  function userSignUp(input) {
    const userExists = Users.filter(user => input.name.includes(user.name))
    if(userExists) {
      alert('Username Already Exists')
    } else {
      setUser(input)
      setUserLogged(true)
      fetch("http://localhost:3001/Users", {
        Method: 'POST',
        headers: {
          'Content-Type': 'application/JSON',
          Accept: 'application/JSON'
        },
        body: JSON.stringify(input)
      })
      .catch(error => {
        alert('Error Fetching Users', error)
      })
    }
  }

  console.log(User)

  return (
    <div className="App">
      <NavBar userLogin = { userLogin } userSignUp = { userSignUp } userLogged = { userLogged }/>
    
    </div>
  );
}

export default App;
