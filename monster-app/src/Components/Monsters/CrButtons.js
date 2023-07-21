import React, { useState } from "react"
import MonsterList from "./MonsterList"

function CrButtons({ cr, monsters, selectMonster }){

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

    const crGroup1 = monsters.filter((monster) => {
        if (monster.challenge_rating >= 0 && monster.challenge_rating <=.2) {
        return monster}
    })

    const crGroup2 = monsters.filter((monster) => {
        if (monster.challenge_rating >.2 && monster.challenge_rating <=.5) {
        return monster}
    })

    const crGroup3 = monsters.filter((monster) => {
        if (monster.challenge_rating >.5 && monster.challenge_rating <=2) {
        return monster}
    })
    const crGroup4 = monsters.filter((monster) => {
        if (monster.challenge_rating >2 && monster.challenge_rating <=5) {
        return monster}
    })
    const crGroup5 = monsters.filter((monster) => {
        if (monster.challenge_rating >5 && monster.challenge_rating <=10) {
        return monster}
    })
    const crGroup6 = monsters.filter((monster) => {
        if (monster.challenge_rating >10 && monster.challenge_rating <=30) {
        return monster}
    })
    
    function handleClick1(e){
        const groupRating = (e.target.value);
        
        if(groupRating === "0--0.2"){setDisplayCr(crGroup1)
        }else if (groupRating === "0.21--0.5"){setDisplayCr(crGroup2)
        }else if (groupRating === "0.51--2"){setDisplayCr(crGroup3)
        }else if (groupRating === "2.1--5") {setDisplayCr(crGroup4)
        }else if (groupRating === "5.1--10") {setDisplayCr(crGroup5)
        }else if (groupRating === "10.1--30") {setDisplayCr(crGroup6)
        }
        setCrNumButtonClicked(!crNumButtonClicked)
     }

    // const displayCrMonsters = displayCr.map((monster, index) =>
    // <MonsterList key={index} monster={monster} selectMonster={selectMonster}/>)
    const displayCrMonsters = displayCr.map((monster, index) => (
        <>
          <MonsterList key={index} monster={monster} selectMonster={selectMonster} /> 
          CR: {monster.challenge_rating}
        </>
      ));
    return(
        <div>
            <button value={cr}
            style={crNumButtonClicked ? clickedCrNumButton:crNumButton}
            onClick={(e) => handleClick1(e)}>{cr}</button>
            {crNumButtonClicked ? displayCrMonsters : null}
        </div>

    )
}
export default CrButtons;