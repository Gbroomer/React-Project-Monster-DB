
function CreateConditionInput({ type, handleChange, createdMonster, index }) {

    function updateConditions(e) {
        const updateValue = e.target.value
        let updatedArray
        if(type ==="condition_immunities") {
            updatedArray = [...createdMonster[type]]
            updatedArray[index] = {
                index: updateValue
            }
        } else {
            updatedArray = [...createdMonster[type]]
            updatedArray[index] = updateValue;
        }

        handleChange(type, updatedArray)
    }
    return (
            <input type="text" name="conditional_trait_name" placeholder="ex: Poison(ed)" onChange={updateConditions}/>
    )
}

export default CreateConditionInput