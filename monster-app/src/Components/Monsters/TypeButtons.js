import React, { useState } from "react"

function TypeButtons({ type, addSelectedType, monsters }){

    const [typeButtonClicked, setTypeButtonClicked] = useState(false)
    const [selectedType, setSelectedType] = useState([])

    const specificTypeButton = {
        background: "grey",
        cursor: "pointer",
        borderRadius: "5px",
        margin:" 0px 1px",
    }
    const clickedSpecificTypeButton = {
        background: "red",
        cursor: "pointer",
        borderRadius: "5px",
        margin:" 0px 1px",
    }

    function handleClick (e) {
        setSelectedType(e.target.value)
        setTypeButtonClicked(!typeButtonClicked)
    }

    const filteredTypes = monsters.filter((monster) =>
    monster.type === selectedType)

    addSelectedType(filteredTypes)

    return(
        <div>
            <button value={type} 
            style={typeButtonClicked ? clickedSpecificTypeButton:specificTypeButton}
            onClick={(e) => handleClick(e)}>{type}</button>
        </div>
    )
}
export default TypeButtons;