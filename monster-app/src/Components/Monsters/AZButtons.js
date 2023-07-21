import React, { useState } from "react"

function AZButtons({ letter, filterLetteredMonsters, unfilterLetteredMonsters })  {
    const [buttonIsClicked, setbuttonIsClicked] = useState(false)

    const letterButtons = {
        background: "grey",
        cursor: "pointer",
        borderRadius: "5px",
        margin:" 0px 1px",
        width: "25px"
    }

    const clickedLetterButtons = {
        background: "red",
        cursor: "pointer",
        borderRadius: "5px",
        margin:" 0px 1px",
        width: "25px"
    }

    function handleClick (){

        if(!buttonIsClicked) {
            filterLetteredMonsters(letter.toLowerCase())
        } else {
            unfilterLetteredMonsters(letter.toLowerCase())
        }
        setbuttonIsClicked(!buttonIsClicked)
    }
    
    return(
        <button onClick={handleClick}
        style={buttonIsClicked ? clickedLetterButtons:letterButtons}>{letter}</button>
    )
}

export default AZButtons;