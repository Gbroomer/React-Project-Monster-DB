import React, { useState } from "react"

function TypeButtons({ type, addSelectedType, monsters }){

    const [typeButtonClicked, setTypeButtonClicked] = useState(false)
    const [currentFilteredTypes, setCurrentFilteredTypes] = useState([])
    
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

    function handleClick (type) {
        if (currentFilteredTypes.includes(type)) {
            setCurrentFilteredTypes((prevSelectedTypes) =>
              prevSelectedTypes.filter((selectedType) => selectedType !== type)
            );
          } else {
            setCurrentFilteredTypes((prevSelectedTypes) => [...prevSelectedTypes, type]);
          }
        setTypeButtonClicked(!typeButtonClicked)
        addSelectedType(currentFilteredTypes)
        console.log(currentFilteredTypes)
    
        };

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
    
    return(
        <div>
            <button value={type} 
            style={typeButtonClicked ? clickedSpecificTypeButton:specificTypeButton}
            onClick={(e) => handleClick(e)}>{type}</button>
        </div>
    )
}
export default TypeButtons;