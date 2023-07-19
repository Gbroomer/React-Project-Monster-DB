import React, { useState } from "react"
import TypeButtons from "./TypeButtons"
import CrButtons from "./CrButtons"

function FilterButtons({ uniqueTypes, monstersCr, monsters, addSelectedType }) {

    const [typeIsClicked, setTypeIsClicked] = useState(false)
    const [crIsClicked, setCrIsClicked] = useState(false)
    
    const typeButtonsContainer = {
        display: "flex",
        gap: "2px",
        justifyContent: 'center',
      }

    const typeButton = {
        background: "grey",
        cursor: "pointer",
        borderRadius: "5px",
        margin:" 5px 2px",
    }

    const clickedTypeButton = {
        background: "red",
        cursor: "pointer",
        borderRadius: "5px",
        margin:" 5px 2px",
    }
    function handleTypeClick() {
        setTypeIsClicked(!typeIsClicked)
    }
    
    const crButton = {
        background: "grey",
        cursor: "pointer",
        borderRadius: "5px",
        margin:" 5px 2px",
    }

    const clickedCrButton = {
        background: "red",
        cursor: "pointer",
        borderRadius: "5px",
        margin:" 5px 2px",
    }

    function handleCrClick() {
        setCrIsClicked(!crIsClicked)
    }

    const uniqueTypeButtons = uniqueTypes.map((type)=>
    <TypeButtons key={type} type={type} 
    monsters={monsters} addSelectedType={addSelectedType}/>)


    return  (
        <>
            <button onClick={handleTypeClick} 
            style={typeIsClicked ? clickedTypeButton:typeButton}>Type</button>
            <button onClick={handleCrClick} 
            style={crIsClicked ? clickedCrButton:crButton}>CR</button>
            {typeIsClicked ? <div style={typeButtonsContainer}>{uniqueTypeButtons}</div> :null}
            {crIsClicked ? <CrButtons /> : null}
        </>
    )
}

export default FilterButtons;