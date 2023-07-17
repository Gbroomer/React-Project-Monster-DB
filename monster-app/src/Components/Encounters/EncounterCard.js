import {useState} from "react"
import EncounterMonsters from "./EncounterMonsters"
function EncounterCard({encounter}) {
    const [generateInfo, setGenerateInfo] = useState(false)
    
    const showMonster = encounter.monsters.map((monster) => <EncounterMonsters monster = {monster} key = {monster.index}/>)

    function renderInfo() {
        setGenerateInfo(!generateInfo)
    }

    return (
        <div className="MonsterCard">
            <h2 onClick = {renderInfo} style= {{ cursor: 'pointer'}}>"{encounter.title}" </h2>
            {generateInfo && (
                <div>
                    {showMonster}
                </div>
            )
            }
        </div>
    )
}

export default EncounterCard