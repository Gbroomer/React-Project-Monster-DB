// import filteredMonsters from "./filteredMonsters"
import MonsterCard from "./MonsterCard"
function MonsterList({ monster, selectMonster }) {
    return (
        <ul>
           <MonsterCard monster = {monster} selectMonster = {selectMonster}/>
        </ul>
    )
}

export default MonsterList;