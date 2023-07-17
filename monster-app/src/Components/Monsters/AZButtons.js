import React, { useEffect, useState } from "react"

function AZButtons({ letter, filterLetteredMonsters })  {
    const [buttonIsClicked, setbuttonIsClicked] = useState(false)
    const [buttonText, setButtonText] = useState('');

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

    function handleClick (e){
        setbuttonIsClicked(!buttonIsClicked)
        setButtonText(e.target.textContent)
        filterLetteredMonsters(buttonText.toLowerCase())
        console.log(buttonText.toLowerCase())
    }
    
    return(
        <button onClick={(e)=>handleClick(e)}
        style={buttonIsClicked ? clickedLetterButtons:letterButtons}>{letter}</button>
    )
}

export default AZButtons;