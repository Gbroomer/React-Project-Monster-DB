import React, { useEffect, useState } from "react"
import MonsterCard from "./MonsterCard"
import AZButtons from "./AZButtons"
import FilterButtons from "./FilterButtons"
import MonsterList from "./MonsterList"

function MonsterContainer({ monsters, selectMonster }) {
    const [filteredMonstersNames, setFilteredMonstersNames] = useState([])
    const [filterAlphabetOn, setFilterAlphabetOn] = useState([])
    const [filterTypesOn, setFilterTypesOn] = useState([])
    const [searchFilterOn, setSearchFilterOn] = useState(false)
    const [searchInput, setSearchInput] = useState('')
    const alphabetArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
        "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]

    console.log(filteredMonstersNames)
    const addSelectedType = (filteredTypes) => {
        setFilterTypesOn(filteredTypes)
        if(!searchFilterOn) {
            const filteredMonsters = monsters.filter((monster) => {
                return monster.type.toLowerCase().includes(filteredTypes)
            })
            if (filterAlphabetOn.length > 0) {
                const superFilter = filteredMonstersNames.filter((monster) =>
                    filteredMonsters.some((monst) => monster.name === monst.name
                    ))
                console.log(superFilter)
                setFilteredMonstersNames(superFilter)
            } else {
                setFilteredMonstersNames(filteredMonstersNames.concat(filteredMonsters))
            }
        } else {
            const filteredMonsters = filteredMonstersNames.filter((monster) => {
                return monster.type.toLowerCase().includes(filteredTypes)
            })
                setFilteredMonstersNames(filteredMonsters)
        }

    }

    const removeSelectedType = (filteredTypes) => {
        setFilterTypesOn(filteredTypes);
        let bothFiltered = []
        let typeMatch, alphabetMatch
        if(!searchFilterOn) {
            typeMatch = filteredTypes.length > 0
                ? monsters.filter((monster) =>
                    filteredTypes.includes(monster.type.toLowerCase())
                )
                : [];
    
            alphabetMatch = filterAlphabetOn.length > 0
                ? monsters.filter((monster) =>
                    filterAlphabetOn.some((letter) =>
                        monster.name.toLowerCase().startsWith(letter)
                    )
                )
                : [];
            if (alphabetMatch.length > 0 && typeMatch.length > 0) {
                bothFiltered = typeMatch.filter((monster) => {
                    return alphabetMatch.some((typeMonster) => typeMonster.name === monster.name)
                })
            } else {
                bothFiltered = alphabetMatch.concat(typeMatch);
            }
        } else {
            typeMatch = filteredTypes.length > 0
                ? filteredMonstersNames.filter((monster) =>
                    filteredTypes.includes(monster.type.toLowerCase())
                )
                : [];
    
            alphabetMatch = filterAlphabetOn.length > 0
                ? filteredMonstersNames.filter((monster) =>
                    filterAlphabetOn.some((letter) =>
                        monster.name.toLowerCase().startsWith(letter)
                    )
                )
                : [];
            if (alphabetMatch.length > 0 && typeMatch.length > 0) {
                bothFiltered = typeMatch.filter((monster) => {
                    return alphabetMatch.some((typeMonster) => typeMonster.name === monster.name)
                })
            } else {
                bothFiltered = alphabetMatch.concat(typeMatch);
            }
        }

        console.log(typeMatch, alphabetMatch);
        setFilteredMonstersNames(bothFiltered);
    }

    const filterLetteredMonsters = (letter) => {
        const refilterAlphabet = filterAlphabetOn.concat(letter)
        setFilterAlphabetOn(refilterAlphabet)
        if(!searchFilterOn) {
            const alphabetMatch = refilterAlphabet.length > 0
                ? monsters.filter((monster) =>
                    refilterAlphabet.some((x) =>
                        monster.name.toLowerCase().startsWith(x)
                    )
                ) : [];
            if (filterTypesOn.length > 0) {
                const superFilter = filteredMonstersNames.filter((monster) =>
                    alphabetMatch.some((monst) => monster.name === monst.name
                    ))
                console.log(superFilter)
                setFilteredMonstersNames(superFilter)
            } else {
                setFilteredMonstersNames(alphabetMatch)
            }
        } else {
            const alphabetMatch = refilterAlphabet.length > 0
                ? filteredMonstersNames.filter((monster) =>
                    refilterAlphabet.some((x) =>
                        monster.name.toLowerCase().startsWith(x)
                    )
                ) : [];
                setFilteredMonstersNames(alphabetMatch)
        }
        
    }

    const unfilterLetteredMonsters = (letter) => {
        const refilterAlphabet = filterAlphabetOn.filter(x => x !== letter)
        setFilterAlphabetOn(refilterAlphabet)
        let bothFiltered = []
        if(!searchFilterOn) {
            const typeMatch = filterTypesOn.length > 0
                ? monsters.filter((monster) =>
                    filterTypesOn.includes(monster.type.toLowerCase())
                )
                : [];
    
            const alphabetMatch = refilterAlphabet.length > 0
                ? monsters.filter((monster) =>
                    refilterAlphabet.some((letter) =>
                        monster.name.toLowerCase().startsWith(letter)
                    )
                )
                : [];
            if (alphabetMatch.length > 0 && typeMatch.length > 0) {
                bothFiltered = typeMatch.filter((monster) => {
                    return alphabetMatch.some((typeMonster) => typeMonster.name === monster.name)
                })
            } else {
                bothFiltered = alphabetMatch.concat(typeMatch);
            }
            setFilteredMonstersNames(bothFiltered);
        } else {
            const typeMatch = filterTypesOn.length > 0
                ? filteredMonstersNames.filter((monster) =>
                    filterTypesOn.includes(monster.type.toLowerCase())
                )
                : [];
    
            const alphabetMatch = refilterAlphabet.length > 0
                ? filteredMonstersNames.filter((monster) =>
                    refilterAlphabet.some((letter) =>
                        monster.name.toLowerCase().startsWith(letter)
                    )
                )
                : [];
            if (alphabetMatch.length > 0 && typeMatch.length > 0) {
                bothFiltered = typeMatch.filter((monster) => {
                    return alphabetMatch.some((typeMonster) => typeMonster.name === monster.name)
                })
            } else {
                bothFiltered = alphabetMatch.concat(typeMatch);
            }
            setFilteredMonstersNames(bothFiltered);
        }
    }

    const searchFilter = (input) => {
        let filteredMonsters
        setSearchInput(input)
        if(filterAlphabetOn.length === 0 && filterTypesOn.length === 0) {
            filteredMonsters = monsters.filter((monster) => 
              monster.name.toLowerCase().includes(input.toLowerCase())
            )
        } else {
            let bothFiltered = []
            const typeMatch = filterTypesOn.length > 0
                ? monsters.filter((monster) =>
                    filterTypesOn.includes(monster.type.toLowerCase())
                )
                : [];
    
            const alphabetMatch = filterAlphabetOn.length > 0
                ? monsters.filter((monster) =>
                    filterAlphabetOn.some((letter) =>
                        monster.name.toLowerCase().startsWith(letter)
                    )
                )
                : [];
            if (alphabetMatch.length > 0 && typeMatch.length > 0) {
                bothFiltered = typeMatch.filter((monster) => {
                    return alphabetMatch.some((typeMonster) => typeMonster.name === monster.name)
                })
            } else {
                bothFiltered = alphabetMatch.concat(typeMatch);
            }
            filteredMonsters = bothFiltered.filter((monster) => {
               return monster.name.toLowerCase().includes(input)
            })
            setFilteredMonstersNames(filteredMonsters);
            // filteredMonsters = filteredMonstersNames.filter((monster) => 
            //    monster.name.toLowerCase().includes(input.toLowerCase())
            // )
        }
        if(input === '') {
            setSearchFilterOn(false)
            let bothFiltered = []
            const typeMatch = filterTypesOn.length > 0
                ? monsters.filter((monster) =>
                    filterTypesOn.includes(monster.type.toLowerCase())
                )
                : [];
    
            const alphabetMatch = filterAlphabetOn.length > 0
                ? monsters.filter((monster) =>
                    filterAlphabetOn.some((letter) =>
                        monster.name.toLowerCase().startsWith(letter)
                    )
                )
                : [];
            if (alphabetMatch.length > 0 && typeMatch.length > 0) {
                bothFiltered = typeMatch.filter((monster) => {
                    return alphabetMatch.some((typeMonster) => typeMonster.name === monster.name)
                })
            } else {
                bothFiltered = alphabetMatch.concat(typeMatch);
            }
            setFilteredMonstersNames(bothFiltered)
        } else {
            setSearchFilterOn(true)
            setFilteredMonstersNames(filteredMonsters)
        }
    }

    const eachMonster = filteredMonstersNames.map((monster, index) =>
        <MonsterList key={index} monster={monster}
            selectMonster={selectMonster} />)

    const allAlphabetButtons = alphabetArray.map((letter) =>
        <AZButtons key={letter} letter={letter}
            filterLetteredMonsters={filterLetteredMonsters}
            unfilterLetteredMonsters={unfilterLetteredMonsters} />)

    const monsterTypes = monsters.map((monster) => monster.type)

    const uniqueTypes = Array.from(new Set(monsterTypes));

    // const monstersCr = monsters.map((monster) => ({ 
    //     name: monster.name, 
    //     challenge_rating: monster.challenge_rating 
    // }))

    return (
        <div className="allMonsters">
            <h1>Monsters: </h1>
            {allAlphabetButtons}
            <br />
            <input type = "text" className = "search" onChange={(e) => searchFilter(e.target.value)} placeholder = "Search"/>
            <br />
            <FilterButtons addSelectedType={addSelectedType} removeSelectedType={removeSelectedType} monsters={monsters} uniqueTypes={uniqueTypes} />
            <br />
            <br />
            {eachMonster}
            {/* addSelectedType={addSelectedType}  monstersCr={monstersCr}*/}
        </div>
    )
}
export default MonsterContainer;