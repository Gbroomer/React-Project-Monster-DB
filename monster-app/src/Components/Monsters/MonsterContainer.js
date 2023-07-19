import React, { useEffect, useState } from "react"
import MonsterCard from "./MonsterCard"
import AZButtons from "./AZButtons"
import FilterButtons from "./FilterButtons"
import MonsterList from "./MonsterList"

function MonsterContainer({ monsters, selectMonster  }) {
    const alphabetArray = ["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

    const [filteredMonstersNames, setFilteredMonstersNames] = useState([])

    function addSelectedType(filteredTypes){ 
        const filteredTypeMonsters = filteredMonstersNames.filter((monster) => {
            filteredTypes.map((filter) => {
                if(monster.name.toLowerCase() !== filter.name.toLowerCase()){
                    return monster;
                }
            })
        })
        console.log(filteredTypeMonsters)
    }

    
    const filterLetteredMonsters = (letter) => {
        // console.log(letter)
        const filterMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().startsWith(String(letter))
            })

        setFilteredMonstersNames(filteredMonstersNames.concat(filterMonsters))

        // console.log(filterMonsters)
        }

    const unfilterLetteredMonsters = (letter) => {
        const unfilterMonsters = filteredMonstersNames.filter((monster) => {
            return !monster.name.toLowerCase().startsWith(String(letter))
            })
        setFilteredMonstersNames(unfilterMonsters)
    }

    const eachMonster = filteredMonstersNames.map((monster, index) =>  
        <MonsterList key={index} monster={monster} 
        selectMonster = {selectMonster}/>)

    const allAlphabetButtons = alphabetArray.map((letter) => 
        <AZButtons key={letter} letter={letter} 
        filterLetteredMonsters={filterLetteredMonsters} 
        unfilterLetteredMonsters = {unfilterLetteredMonsters}/>)
        
    const monsterTypes = monsters.map((monster) => monster.type)

    const uniqueTypes = Array.from(new Set(monsterTypes));

    const monstersCr = monsters.map((monster) => ({ 
        name: monster.name, 
        challenge_rating: monster.challenge_rating 
    }))

    // function addSelectedType(filteredTypes)  {
    //     setFilteredMonstersNames([...filteredMonstersNames, filteredTypes]);
    // }
    

    return (
        <div className="allMonsters">
            <h1>Monster List:</h1>
            {allAlphabetButtons}
            <br />
            <FilterButtons addSelectedType={addSelectedType} monsters={monsters} uniqueTypes={uniqueTypes} monstersCr={monstersCr}/>
            <br />
            <br />
            {eachMonster}
        </div>
    )
}
export default MonsterContainer;