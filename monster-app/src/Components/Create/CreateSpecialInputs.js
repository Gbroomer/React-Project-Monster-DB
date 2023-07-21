function CreateSpecialInputs({ type, handleChange, createdMonster, index, removeSpecial }) {

    function updateActionName(e) {
        const updateValue = e.target.value
        let updatedArray = [...createdMonster[type]]
        updatedArray[index] = {
            ...createdMonster[type][index],
            name: updateValue
        }
        handleChange(type, updatedArray)
    }
    function updateActionDesc(e) {
        const updateValue = e.target.value
        let updatedArray = [...createdMonster[type]]
        updatedArray[index] = {
            ...createdMonster[type][index],
            desc: updateValue
        }
        handleChange(type, updatedArray)
    }

    return (
        <div>
            <input type="text" name="name" placeholder="Claw" onChange={updateActionName} />
            <input className="form-control" type="text" name="desc" placeholder=" Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: (1d8 + 4) piercing damage." onChange={updateActionDesc} />
            {index > 0 ? <button onClick={(e) => removeSpecial(e, index, type)}>delete</button> : null}
        </div>
    )
}

export default CreateSpecialInputs