import '../App.css';
import React, { useEffect, useState } from "react"
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
// import Encounters from "./Encounters/Encounters"
// import Home from "./Home"
import MonsterContainer from "./Monsters/MonsterContainer"
import Encounters from "./Encounters/Encounters"
// import SpecificMonster from "./Monsters/SpecificMonster"
// import User from "./UserInfo/User"
import NavBar from "./NavBar"


function App() {

  const [monsters, setMonsters] = useState([])
  const [userLogged, setUserLogged] = useState(false)
  const [users, setUsers] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch("https://www.dnd5eapi.co/api/monsters")
      .then(res => res.json())
      .then(data => setMonsters(data.results))
  }, [])

  useEffect(() => {
    fetch("http://localhost:3001/Users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])


  function userLogin(input) {
    const userExists = users.find(user => user.name === input.name && user.password === input.password)
    if (userExists) {
      setUser(userExists)
      setUserLogged(true)
    } else {
      alert('Incorrect Username or Password. Information is case sensitive. Check your cap locks.')
    }
  }
  console.log(monsters)
  function userSignUp(input) {
    const userExists = users.find(user => user.name.toLowerCase() === input.name.toLowerCase())
    if (userExists) {
      alert('Username Already Exists')
    } else {
      fetch("http://localhost:3001/Users", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/JSON',
          Accept: 'application/JSON'
        },
        body: JSON.stringify(input)
      })
        .then(res => res.json())
        .then(newUser => {
          setUser(newUser)
          setUserLogged(true)
          console.log(newUser)
        })
        .catch(error => {
          alert('Error Fetching Users', error)
          console.log(error)
        })
    }
  }
  return (

    <div className="App">
      <NavBar userLogin={userLogin} userSignUp={userSignUp} userLogged={userLogged} user={user} />
      <MonsterContainer monsters={monsters} setMonsters={setMonsters}/>
    </div>
  );
}

export default App;
