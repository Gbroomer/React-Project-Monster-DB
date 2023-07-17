import React, { useEffect, useState } from "react"

function MonsterCard ({ monsterName }) {
    return (
        <div className="monster">
        <h4>{monsterName}</h4>
        </div>
    )
}

export default MonsterCard;