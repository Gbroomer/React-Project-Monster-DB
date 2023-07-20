import React, { useState } from "react"

function CrButtons({ monstersCr  }){

    const [crNumButtonClicked, setCrNumButtonClicked] = useState(false)
    const [displayCr, setDisplayCr] = useState([])

    const crNumButton = {
        background: "grey",
        cursor: "pointer",
        borderRadius: "5px",
        margin:" 0px 1px",
    }
    const clickedCrNumButton = {
        background: "red",
        cursor: "pointer",
        borderRadius: "5px",
        margin:" 0px 1px",
    }
    const crGroup1 = monstersCr.filter((monster) => {
        if (monster.challenge_rating >= 0 && monster.challenge_rating <=.2) {
            return monster
        //  } else if (monster.challenge_rating >.2 && monster.challenge_rating <=.5) {
        //      return monster
        // } else if (monster.challenge_rating >.5 && monster.challenge_rating <=2) {
        //     return monster
        // } else if (monster.challenge_rating >2 && monster.challenge_rating <=5) {
        //     return monster
        // } else if (monster.challenge_rating >5 && monster.challenge_rating <=10) {
        //     return monster
        // } else if (monster.challenge_rating >10 && monster.challenge_rating <=30) {
        //     return monster
        }
    })
    // const notCrGroup1 = monstersCr.filter((monster) => {
    //     if (monster.challenge_rating >.2) {
    //         return monster
    //     }
    // })
    const crGroup1Name = crGroup1.map((item) => item.name )
    const displayCrName = displayCr.map((item) => item.name )
    function handleClick1(){
        setDisplayCr((prevDisplayCr) => [...prevDisplayCr, ...crGroup1Name]);
        if (displayCrName.includes(crGroup1Name)) {
            setDisplayCr((prevDisplayCr) =>
            prevDisplayCr.filter((displayCrName) => displayCrName !== crGroup1Name)
            );
        } else {
            setDisplayCr((prevDisplayCr) => prevDisplayCr.concat(crGroup1Name));
        }

        // if (crNumButtonClicked) {
        //     setDisplayCr(crGroup1);
        // } else {
        //     setDisplayCr(notCrGroup1);
        // }
        console.log(displayCr)


        setCrNumButtonClicked(!crNumButtonClicked)
     }
   
    return(
        <div>
            <button value="group1" 
            style={crNumButtonClicked ? clickedCrNumButton:crNumButton}
            onClick={handleClick1}>
            0--0.2</button>
            <button value="group2" 
            style={crNumButtonClicked ? clickedCrNumButton:crNumButton}
            >
            0.21--0.5</button>
            <button value="group3" 
            style={crNumButtonClicked ? clickedCrNumButton:crNumButton}
            >
            0.51--2</button>
            <button value="group4"
            style={crNumButtonClicked ? clickedCrNumButton:crNumButton}
            >
            2.1--5</button>
            <button value="group5" 
            style={crNumButtonClicked ? clickedCrNumButton:crNumButton}
            >
            5.1--10</button>
            <button value="group6"
            style={crNumButtonClicked ? clickedCrNumButton:crNumButton}
            >
            10.1--30</button>
        </div>
    )
}
export default CrButtons;