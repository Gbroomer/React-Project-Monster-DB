import { NavLink } from "react-router-dom"


function MonsterCard({ monster, selectMonster }) {

    return (
        <div>
            <NavLink onClick = {(e) => {
                selectMonster(monster)}}
                to={monster.index} style={{ cursor: 'pointer', color: 'white' }}>{monster.name}</NavLink>
        </div>
    )
}

export default MonsterCard;