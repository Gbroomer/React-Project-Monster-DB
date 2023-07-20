import { useState } from "react"
import EncounterList from "./EncounterList"


function Encounters({ user, updateUser, encounters }) {
    const [nameEncounter, setNameEncounter] = useState('')
    function newEncounter(e) {
        e.preventDefault()
        if (nameEncounter !== "") {
            const updateEncounters = [
                ...user.encounters,
                {
                    title: nameEncounter,
                    monsters: []
                }
            ]
            console.log(user)
            fetch(`http://localhost:3001/Users/${user.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/JSON', Accept: 'application/JSON' },
                body: JSON.stringify({ ...user, encounters: updateEncounters })
            }).then(res => res.json())
                .then(updatedUser => {
                    updateUser(updatedUser)
                })

        }
    }
    console.log(user.encounters)
    console.log(nameEncounter)
    return (
        <div className="encounter_container">
            <h3>Create New Encounter: </h3>
            <form>
                <input required type="text" className="new_encounter" id="new_encounter_input" name="title" placeholder="Goblin Fight!" onChange={((e) => { setNameEncounter(e.target.value) })} />
                <button className="new_encounter" onClick={(e) => newEncounter(e)}>Create Encounter</button>

            </form>
            <EncounterList encounters={encounters} user={user} updateUser={updateUser} />
        </div>
    )
}

export default Encounters