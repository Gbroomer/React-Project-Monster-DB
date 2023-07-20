import { useState } from "react"
import CreateSpecialInputs from "./CreateSpecialInputs"

function CreateSpecialAbilities({ handleChange, createdMonster }) {
    const [specialCounter, setSpecialCounter] = useState([0])
    const [actionsCounter, setActionsCounter] = useState([0])
    const [legendaryCounter, setLegendaryCounter] = useState([0])

    const specialRender = specialCounter.map((index) => <CreateSpecialInputs type={"special_abilities"} handleChange={handleChange} createdMonster={createdMonster} key={index} index={index} removeSpecial={removeSpecial} />)
    const actionsRender = actionsCounter.map((index) => <CreateSpecialInputs type={"actions"} handleChange={handleChange} createdMonster={createdMonster} key={index} index={index} removeSpecial={removeSpecial} />)
    const legendaryRender = legendaryCounter.map((index) => <CreateSpecialInputs type={"legendary_actions"} handleChange={handleChange} createdMonster={createdMonster} key={index} index={index} removeSpecial={removeSpecial} />)

    function adjSpecialCounter(truthyness, index, type) {
        if (truthyness) {
            setSpecialCounter(specialCounter => [...specialCounter, (specialCounter.length - 1) + 1])
        } else {
            setSpecialCounter((prevSpecialCounter) => {
                let updateSpecialCounter = [...prevSpecialCounter]
                updateSpecialCounter.splice(index, 1)

                for (let i = index; i < updateSpecialCounter.length; i++) {
                    updateSpecialCounter[i] = updateSpecialCounter[i] - 1
                }
                return updateSpecialCounter
            })
            let updatedArray = [...createdMonster[type]]
            updatedArray.splice(index, 1)
            handleChange(type, updatedArray)
        }
    }
    function adjActionsCounter(truthyness, index, type) {
        if (truthyness) {
            setActionsCounter(actionsCounter => [...actionsCounter, (actionsCounter.length - 1) + 1])
        } else {
            setActionsCounter((prevActionsCounter) => {
                let updateActionsCounter = [...prevActionsCounter]
                updateActionsCounter.splice(index, 1)

                for (let i = index; i < updateActionsCounter.length; i++) {
                    updateActionsCounter[i] = updateActionsCounter[i] - 1
                }
                return updateActionsCounter
            })
            let updatedArray = [...createdMonster[type]]
            updatedArray.splice(index, 1)
            handleChange(type, updatedArray)
        }
    }
    function adjLegendaryCounter(truthyness, index, type) {
        if (truthyness) {
            setLegendaryCounter(legendaryCounter => [...legendaryCounter, (legendaryCounter.length - 1) + 1])
        } else {
            setLegendaryCounter((prevLegendaryCounter) => {
                let updateLegendaryCounter = [...prevLegendaryCounter]
                updateLegendaryCounter.splice(index, 1)

                for (let i = index; i < updateLegendaryCounter.length; i++) {
                    updateLegendaryCounter[i] = updateLegendaryCounter[i] - 1
                }
                return updateLegendaryCounter
            })
            let updatedArray = [...createdMonster[type]]
            updatedArray.splice(index, 1)
            handleChange(type, updatedArray)
        }
    }
    function removeSpecial(e, index, type) {
        e.preventDefault()
        if (type === 'special_abilities') {
            adjSpecialCounter(false, index, type)
        } if (type === "actions") {
            adjActionsCounter(false, index, type)
        } if (type === 'legendary_actions') {
            adjLegendaryCounter(false, index, type)
        }
    }
    return (
        <>
            <div className="special_abilities" >
                <h5>Special Abilities:</h5>
                <form className="special_abilities_form">
                    {specialRender}
                </form>
                <button onClick={() => adjSpecialCounter(true)}>Add New Special Ability</button>
            </div>
            <div className="actions" >
                <h5>Actions:</h5>
                <form className="actions_form">
                    {actionsRender}
                </form>
                <button onClick={() => adjActionsCounter(true)}>Add New Action</button>
            </div>
            <div className="legendary_actions" >
                <h5>Legendary Actions:</h5>
                <form className="legendary_actions_form">
                    {legendaryRender}
                </form>
                <button onClick={() => adjLegendaryCounter(true)}>Add New Legendary Action</button>
            </div>
        </>
    )
}



export default CreateSpecialAbilities