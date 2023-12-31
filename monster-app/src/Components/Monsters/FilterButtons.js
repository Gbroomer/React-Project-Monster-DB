import React, { useState } from "react"
import TypeButtons from "./TypeButtons"
import CrButtons from "./CrButtons"

function FilterButtons({ uniqueTypes, monsters, addSelectedType, removeSelectedType, selectMonster, crSwitch }) {

    const [typeIsClicked, setTypeIsClicked] = useState(false)
    const [crIsClicked, setCrIsClicked] = useState(false)
    const [currentFilteredTypes, setCurrentFilteredTypes] = useState([])
    const crArray = ["0--0.2", "0.21--0.5", "0.51--2", "2.1--5", "5.1--10", "10.1--30"]

    const typeButtonsContainer = {
        display: "flex",
        gap: "1px",
        justifyContent: 'center',
    }

    const typeButton = {
        background: "grey",
        cursor: "pointer",
        borderRadius: "5px",
        margin: " 5px 2px",
    }

    const clickedTypeButton = {
        background: "red",
        cursor: "pointer",
        borderRadius: "5px",
        margin: " 5px 2px",
    }
    function handleTypeClick() {
        setTypeIsClicked(!typeIsClicked)
        setCurrentFilteredTypes([])
    }

    const crButton = {
        background: "grey",
        cursor: "pointer",
        borderRadius: "5px",
        margin: " 5px 2px",
    }

    const clickedCrButton = {
        background: "red",
        cursor: "pointer",
        borderRadius: "5px",
        margin: " 5px 2px",
    }

    function handleCrClick() {
        setCrIsClicked(!crIsClicked)
    }

    function handleTypeClicks(target, clicked) {
        const updatedFilterTypes = currentFilteredTypes.includes(target)
            ? currentFilteredTypes.filter((FilterType) => FilterType !== target)
            : [...currentFilteredTypes, target]
        setCurrentFilteredTypes(updatedFilterTypes)
        if(!clicked) {
            addSelectedType(updatedFilterTypes)
        } else {
            removeSelectedType(updatedFilterTypes)
        }
    }

    const uniqueTypeButtons = uniqueTypes.map((type, index) =>
        <TypeButtons key={index} type={type}
            monsters={monsters} onTypeClicks={handleTypeClicks} />)

    const crButtons = crArray.map((cr, index) => 
    <CrButtons key={index} cr={cr} monsters={monsters}
    selectMonster={selectMonster} crSwitch={crSwitch}/> )
    // {crIsClicked ? <CrButtons monsters={monsters} selectMonster={selectMonster} /> :null}
    return  (
        <>
            <button onClick={handleTypeClick} 
            style={typeIsClicked ? clickedTypeButton:typeButton}>Type</button>
            <button onClick={handleCrClick} 
            style={crIsClicked ? clickedCrButton:crButton}>CR</button>
            {typeIsClicked ? <div style={typeButtonsContainer}>{uniqueTypeButtons}</div> :null}
            {crIsClicked ? <div style={typeButtonsContainer}>{crButtons}</div> :null}
        </>
    )
}

export default FilterButtons;