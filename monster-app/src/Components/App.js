import '../App.css';
import React, { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import MonsterContainer from "./Monsters/MonsterContainer"
import Encounters from "./Encounters/Encounters"
import SpecificMonster from "./Monsters/SpecificMonster"
import CreateForm from "./Create/CreateForm"
import NavBar from "./NavBar"
import Home from './Home';


function App() {

  const navigate = useNavigate()
  const [monsters, setMonsters] = useState([])
  const [userLogged, setUserLogged] = useState(false)
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)
  const [selectedMonster, setSelectedMonster] = useState([])
  const [encounters, setEncounters] = useState(false)

  useEffect(() => {
    if (monsters.length === 0) {
      fetch("https://www.dnd5eapi.co/api/monsters")
        .then(res => res.json())
        .then(data => {
          const fetchPromises = data.results.map(monster => {
            return fetch(`https://www.dnd5eapi.co${monster.url}`)
              .then(res => res.json());
          });
          
          return Promise.all(fetchPromises);
        })
        .then(fetchedMonsters => {

          const uniqueMonsterNames = new Set()
          monsters.forEach(monster => {
            uniqueMonsterNames.add(monster.name)
          })

          const uniqueFetchedMonsters = fetchedMonsters.filter(monster => {
            return !uniqueMonsterNames.has(monster.name)
          })
          setMonsters(prevMonsters => [...prevMonsters, ...uniqueFetchedMonsters])
        })
        .catch(error => {
          console.error("Error fetching monsters:", error);
        });
    }
  }, [monsters]);

  useEffect(() => {
    fetch("http://localhost:3001/Monsters")
      .then(res => res.json())
      .then(fetchedMonsters => {
        const uniqueMonsterNames = new Set();
        const uniqueMonsters = fetchedMonsters.filter(monster => {
          if(!uniqueMonsterNames.has(monster.name)) {
            uniqueMonsterNames.add(monster.name)
            return true
          }
          return false
        })
        setMonsters(prevMonsters => [...prevMonsters, ...uniqueMonsters])
      })
  }, [])


  useEffect(() => {
    fetch("http://localhost:3001/Users")
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])


  function selectMonster(monster) {
    setSelectedMonster(monster)
  }
  function userLogin(input) {
    const userExists = users.find(user => user.name === input.name && user.password === input.password)
    if (userExists) {
      setUser(userExists)
      setUserLogged(true)
      setEncounters(userExists.encounters)
      console.log(userExists.encounters)
    } else {
      alert('Incorrect Username or Password. Information is case sensitive. Check your cap locks.')
    }
  }
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
          setEncounters(newUser.encouters)
          setUserLogged(true)
          console.log(newUser)
        })
        .catch(error => {
          alert('Error Fetching Users', error)
          console.log(error)
        })
    }
  }
  function pushNewMonster(monster) {
    const uniqueMonster = monsters.filter(mon => {
      if(mon.name.toLowerCase() === monster.name.toLowerCase()) {
        return true
      } return false
    })
    console.log("uniqueMonster:", uniqueMonster)

    if(uniqueMonster.length === 0) {
      setMonsters([
        ...monsters,
        monster
      ])
  
      fetch("http://localhost:3001/Monsters", {
        method: 'POST',
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(monster)
      }).then(() => {
        setSelectedMonster(monster)
        navigate(`./Monsters/${monster.index}`)
      }).catch((error) => {
        console.log("Error:", error)
      })
    } else {
      alert('A monster with that name already exists!')
    }


  }
  function updateUser(updatedUser) {
    setUser(updatedUser)
    setEncounters(updatedUser.encounters)
  }

  console.log(monsters)
  return (

    <div className="App">
      <NavBar userLogin={userLogin} userSignUp={userSignUp} userLogged={userLogged} user={user} />
      <Routes>
        <Route path="Monsters/:index" element={<SpecificMonster monster={selectedMonster} encounters = {encounters} user = {user} updateUser = {updateUser}/>} />
        <Route path="/" element={userLogged ? <Encounters user={user} updateUser={updateUser} encounters = {encounters} /> : <Home />} />
        <Route path="/Monsters" element={<MonsterContainer monsters={monsters} selectMonster={selectMonster} />} />
        <Route path="Create-Monster" element={<CreateForm pushNewMonster={pushNewMonster} />} />
      </Routes>
    </div>
  );
}

export default App;
