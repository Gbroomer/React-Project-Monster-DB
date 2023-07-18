import React, { useEffect, useState } from "react"
import MonsterCard from "./MonsterCard"
import AZButtons from "./AZButtons"
import MonsterList from "./MonsterList"

function MonsterContainer({ monsters, selectMonster }) {
    const alphabetArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const [filteredMonstersNames, setFilteredMonstersNames] = useState([])

    const filterLetteredMonsters = (letter) => {
        console.log(letter)
        const filterMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().startsWith(String(letter))
            })

        setFilteredMonstersNames(filteredMonstersNames.concat(filterMonsters))

        console.log(filterMonsters)
        }

    const unfilterLetteredMonsters = (letter) => {
        const unfilterMonsters = filteredMonstersNames.filter((monster) => {
            return !monster.name.toLowerCase().startsWith(String(letter))
            })
        setFilteredMonstersNames(unfilterMonsters)
    }
        const eachMonster = filteredMonstersNames.map((monster, index) =>  
            <MonsterList key={index} monster={monster} selectMonster = {selectMonster}/>)

    const allAlphabetButtons = alphabetArray.map((letter) => 
        <AZButtons key={letter} letter={letter} filterLetteredMonsters={filterLetteredMonsters} unfilterLetteredMonsters = {unfilterLetteredMonsters}/>)
            
    return (
        <div className="allMonsters">
            <h1>Monster List:</h1>
            {allAlphabetButtons}
            <br />
            <br />
            {eachMonster}
        </div>
    )
}
export default MonsterContainer;