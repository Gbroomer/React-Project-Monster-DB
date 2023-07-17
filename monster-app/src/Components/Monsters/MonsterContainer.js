import React, { useEffect, useState } from "react"
import MonsterCard from "./MonsterCard"
import AZButtons from "./AZButtons"
import MonsterList from "./MonsterList"

function MonsterContainer({ monsters, setMonsters }) {
    const alphabetArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    const [filteredMonstersNames, setFilteredMonstersNames] = useState([])

    const filterLetteredMonsters = (letter) => {
        const filterMonsters = monsters.filter(monster => {
            const regex = new RegExp(`^${letter}`, 'i');
            return regex.test(monster.name);
        });
        
        const filterMonsterObj = filterMonsters.filter(monster => monster.name).map(monster => monster.name);
        setFilteredMonstersNames(filterMonsterObj)


        }
        const eachMonster = filteredMonstersNames.map(monster =>  
            <MonsterList key={monster} monster={monster}/>)

    // const monstersTest = monsters.map((monster, index) => {
    //     if(index.startsWith("B")){
    //         return monster;
    //     }
    // })
    // console.log(monstersTest)

    const allAlphabetButtons = alphabetArray.map((letter) => 
        <AZButtons key={letter} letter={letter} filterLetteredMonsters={filterLetteredMonsters}/>)
            
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