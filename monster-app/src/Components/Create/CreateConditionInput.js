
function CreateConditionInput({ type, handleChange, createdMonster, index, removeCond }) {

    function updateConditions(e) {
        const updateValue = e.target.value
        let updatedArray
        if (type === "condition_immunities") {
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
        <div>
            <input type="text" name="conditional_trait_name" placeholder="ex: Poison(ed)" onChange={updateConditions} />
            {index > 0 ? <button onClick={(e) => removeCond(e, index, type)}>delete</button> : null }
            
        </div>
    )
}

export default CreateConditionInput