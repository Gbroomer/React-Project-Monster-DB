import {useState} from "react"
import EncounterMonsters from "./EncounterMonsters"
function EncounterCard({encounter, user, updateUser}) {
    const [generateInfo, setGenerateInfo] = useState(false)
    
    const showMonster = encounter.monsters.map((monster) => <EncounterMonsters encounter={encounter} monster = {monster} key = {monster.index} user={user} updateUser={updateUser}/>)

    function renderInfo() {
        if(encounter.monsters.length > 0) {
            setGenerateInfo(!generateInfo)
        } else {
            
        }
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