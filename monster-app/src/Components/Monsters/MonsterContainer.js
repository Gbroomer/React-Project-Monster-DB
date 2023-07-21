import React, { useEffect, useState } from "react"
import MonsterCard from "./MonsterCard"
import AZButtons from "./AZButtons"
import FilterButtons from "./FilterButtons"
import MonsterList from "./MonsterList"

function MonsterContainer({ monsters, selectMonster  }) {
    const [filterAlphabetOn, setFilterAlphabetOn] = useState(false)
    const alphabetArray = ["A","B","C","D","E","F","G","H","I","J","K","L",
    "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

    const [filteredMonstersNames, setFilteredMonstersNames] = useState([])

    function addSelectedType(filteredTypes){ 
        if(filterAlphabetOn) {
            const filteredTypeMonsters = filteredMonstersNames.filter((monster) => {
                return (filteredTypes.some((filter) => {
                    return monster.name.toLowerCase() === filter.name.toLowerCase()
                }))
            })
            setFilteredMonstersNames(filteredTypeMonsters)
        } else {
            setFilteredMonstersNames(filteredTypes)
        }
    }
    
    const filterLetteredMonsters = (letter) => {
        const filterMonsters = monsters.filter((monster) => {
            return monster.name.toLowerCase().startsWith(String(letter))
            }) 
        setFilteredMonstersNames(filteredMonstersNames.concat(filterMonsters))
        }

    const unfilterLetteredMonsters = (letter) => {
        const unfilterMonsters = filteredMonstersNames.filter((monster) => {
            return !monster.name.toLowerCase().startsWith(String(letter))
            })
        setFilteredMonstersNames(unfilterMonsters)
    }
 
    useEffect(() => {
        if (filteredMonstersNames.length === 0) {
            setFilterAlphabetOn(false);
        } else {
            setFilterAlphabetOn(true);
        }
      }, [filteredMonstersNames]);

    const eachMonster = filteredMonstersNames.map((monster, index) =>  
        <MonsterList key={index} monster={monster} 
        selectMonster = {selectMonster}/>)

    const allAlphabetButtons = alphabetArray.map((letter) => 
        <AZButtons key={letter} letter={letter} 
        filterLetteredMonsters={filterLetteredMonsters} 
        unfilterLetteredMonsters = {unfilterLetteredMonsters}/>)
        
    const monsterTypes = monsters.map((monster) => monster.type)

    const uniqueTypes = Array.from(new Set(monsterTypes));

    return (
        <div className="allMonsters">
            <h1>Monster List:</h1>
            {allAlphabetButtons}
            <br />
            <FilterButtons addSelectedType={addSelectedType} monsters={monsters}
             uniqueTypes={uniqueTypes} selectMonster={selectMonster} />
            <br />
            <br />
            {eachMonster}
        </div>
    )
}
export default MonsterContainer;