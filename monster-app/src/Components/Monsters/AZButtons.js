import React, { useState } from "react"
import { Button } from "react-bootstrap";

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
    
    return (
        <Button
            onClick={handleClick}
            variant={buttonIsClicked ? "danger" : "success"}
            className="m-1 p-0 rounded-circle btn-lg"
            style={{ width: "40px", height: "40px", lineHeight: "1", fontSize: "18px" }}
        >
            {letter}
        </Button>
    );
}

export default AZButtons;