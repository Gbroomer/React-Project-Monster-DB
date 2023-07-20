import EncounterCard from "./EncounterCard"

function EncounterList({ encounters, user, updateUser }) {

    const generateEncounter = encounters.map((encounter) => (
    <EncounterCard encounter = {encounter} key = {encounter.title} user ={user} updateUser={updateUser} />))

    return (
        <div>
            <h1>Your Encounters: </h1>
            {generateEncounter}
        </div>
    )
}

export default EncounterList