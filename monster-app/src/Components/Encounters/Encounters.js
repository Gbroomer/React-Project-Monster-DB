import EncounterList from "./EncounterList"

function Encounters({user}) {

    return(
        <EncounterList encounters = {user.encounters}/>
    )
}

export default Encounters