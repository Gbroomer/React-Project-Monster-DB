import EncounterCard from "./EncounterCard"

function EncounterList({ encounters }) {

    const generateEncounter = encounters.map((encounter) => (
    <EncounterCard encounter = {encounter} key = {encounter.title}/>))

    return (
        <div>
            <h1>Your Encounters: </h1>
            {generateEncounter}
        </div>
    )
}

export default EncounterList