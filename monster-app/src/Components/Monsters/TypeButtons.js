import React, { useState } from "react"

function TypeButtons({ type, onTypeClicks }){

    const [typeButtonClicked, setTypeButtonClicked] = useState(false)

    
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

    function handleStyling() {
        setTypeButtonClicked(!typeButtonClicked)
    }

    return(
        <div>
            <button value={type} 
            style={typeButtonClicked ? clickedSpecificTypeButton:specificTypeButton}
            onClick={(e) => {
                onTypeClicks(e.target.value, typeButtonClicked)
                handleStyling(e)
            }}>{type}</button>
        </div>
    )
}
export default TypeButtons;
// const filteredMonsterTypes = (type) => {
//     const filteredTypes = monsters.filter((monster) => {
//         return monster.type === type
//     })
//     setCurrentFilteredTypes(currentFilteredTypes.concat(filteredTypes))
//   }


// const unfilteredMonsterTypes = (type)=> {
//     const unfilteredTypes = monsters.filter((monster) => {
//         return monster.type !== type
//     })
//     setCurrentFilteredTypes(unfilteredTypes)
//   }