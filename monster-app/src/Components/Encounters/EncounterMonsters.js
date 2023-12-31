import { useState } from "react"

function EncounterMonsters({ monster, user, updateUser, encounter }) {
    const [showMonster, setShowMonster] = useState(false)
    const {
        name,
        size,
        type,
        alignment,
        armor_class,
        hit_points,
        hit_points_roll,
        speed,
        strength,
        dexterity,
        constitution,
        intelligence,
        wisdom,
        charisma,
        proficiencies,
        damage_vulnerabilities,
        damage_resistances,
        damage_immunities,
        condition_immunities,
        senses,
        languages,
        challenge_rating,
        xp,
        special_abilities,
        actions,
        legendary_actions
    } = monster;

    const savingThrows = []
    const skills = []

    proficiencies.map((proficiency) => {
        const { index, name } = proficiency.proficiency
        const value = proficiency.value

        if (index.startsWith('saving-throw')) {
            const abilityScore = index.substring(name.indexOf(":") + 1).toUpperCase()
            savingThrows.push(`${abilityScore} +${value}`)
        } else if (index.startsWith('skill')) {
            const skillName = name.substring(name.indexOf(":") + 2)
            skills.push(`${skillName} +${value}`)
        }
    })

    function reveal() {
        setShowMonster(!showMonster)
    }
    function removeMonster() {
        let encounterIndex = user.encounters.findIndex((encount) => encount === encounter)
        console.log(encounterIndex)
        const updatedEncounters = [...user.encounters]
        let encounterMonsters = updatedEncounters[encounterIndex].monsters
        const updatedMonsters = encounterMonsters.filter((monst) => monst !== monster)

        updatedEncounters[encounterIndex].monsters = updatedMonsters

        let updatedUser = {
            ...user,
            encounters: updatedEncounters
        }
        console.log(updatedUser)
        fetch(`http://localhost:3001/Users/${user.id}`, {
            method: "PATCH",
            headers: { 'Content-Type': 'application/JSON', Accept: 'application/JSON' },
            body: JSON.stringify(updatedUser)
        }).then(res => res.json())
            .then(updatedUser => {
                updateUser(updatedUser)
            })
    }
    return (
        <div className="monsterCard">
            <h3 onClick={reveal} style={{ cursor: 'pointer' }} >{name}</h3>
            {showMonster && (
                <>

                    <p>{size} {type} {alignment}</p>
                    <h5>Armor Class: {armor_class[0].value} ({armor_class[0].type})</h5>
                    <h5>Hit Points: {hit_points} ({hit_points_roll})</h5>
                    <h5>Speed:
                        {speed.walk && ` Walk: ${speed.walk}`}
                        {speed.climb && ` Climb: ${speed.climb}`}
                        {speed.fly && ` Fly: ${speed.fly}`}
                        {speed.swim && ` Swim: ${speed.swim}`}
                    </h5>

                    <div className="Ability Scores">
                        <h4>STR: {strength} ({(strength - 10) >= 0 ? '+' : '-'}{Math.abs(Math.floor((strength - 10) / 2))})</h4>
                        <h4>DEX: {dexterity} ({(dexterity - 10) >= 0 ? '+' : '-'}{Math.abs(Math.floor((dexterity - 10) / 2))})</h4>
                        <h4>CON: {constitution} ({(constitution - 10) >= 0 ? '+' : '-'}{Math.abs(Math.floor((constitution - 10) / 2))})</h4>
                        <h4>INT: {intelligence} ({(intelligence - 10) >= 0 ? '+' : '-'}{Math.abs(Math.floor((intelligence - 10) / 2))})</h4>
                        <h4>WIS: {wisdom} ({(wisdom - 10) >= 0 ? '+' : '-'}{Math.abs(Math.floor((wisdom - 10) / 2))})</h4>
                        <h4>CHA: {charisma} ({(charisma - 10) >= 0 ? '+' : '-'}{Math.abs(Math.floor((charisma - 10) / 2))})</h4>
                    </div>

                    {savingThrows.length > 0 && (
                        <div>
                            <p>Saving Throws: {savingThrows.join(", ")}</p>
                        </div>
                    )}

                    {skills.length > 0 && (
                        <div>
                            <p>Skills: {skills.join(", ")}</p>
                        </div>
                    )}

                    {damage_vulnerabilities.length > 0 && (
                        <div>
                            <h4>Damage Vulnerabilities:</h4>
                            {damage_vulnerabilities.map((vulnerability, index) => (
                                <p key={index}>{vulnerability}</p>
                            ))}
                        </div>
                    )}
                    {damage_resistances.length > 0 && (
                        <div>
                            <h4>Damage Resistances:</h4>
                            {damage_resistances.map((resistance, index) => (
                                <p key={index}>{resistance}</p>
                            ))}
                        </div>
                    )}
                    {damage_immunities.length > 0 && (
                        <div>
                            <h4>Damage Immunities:</h4>
                            {damage_immunities.map((immunity, index) => (
                                <p key={index}>{immunity}</p>
                            ))}
                        </div>
                    )}
                    {condition_immunities.length > 0 && (
                        <div>
                            <h4>Condition Immunities:</h4>
                            {condition_immunities.map((immunity, index) => (
                                <p key={index}>{immunity.index}</p>
                            ))}
                        </div>
                    )}
                    <h4>Sense:</h4>
                    {Object.entries(senses).map(([key, value]) => {
                        const formatKey = key.charAt(0).toUpperCase() + key.slice(1).replace('_', ' ')
                        return (
                            <p key={key}>
                                {formatKey}: {value}
                            </p>
                        )
                    }
                    )}
                    <h4>Languages: {languages} </h4>
                    <h4>Challenge Rating: {challenge_rating}</h4>
                    <h5>Xp: {xp}</h5>
                    <h3>Special Abilities: </h3>
                    {special_abilities.map((ability, index) => (
                        <div key={index}>
                            <h4>{ability.name}</h4>
                            <p>{ability.desc}</p>
                        </div>
                    ))}
                    <h3>Actions:</h3>
                    {actions.map((action, index) => (
                        <div key={index}>
                            <h3>{action.name}</h3>
                            <p>{action.desc}</p>
                        </div>
                    ))}
                    {legendary_actions.lenth > 0 && (
                        <h3>Legendary Actions: </h3>
                    )}
                    {legendary_actions.length > 0 && (
                        legendary_actions.map((action, index) => (
                            <div key={index}>
                                <h3>{action.name}</h3>
                                <p>{action.desc}</p>
                            </div>
                        ))
                    )}
                    <button className="remove_monster" onClick={removeMonster}>Remove from Encounter</button>
                </>
            )
            }
        </div >
    )
}

export default EncounterMonsters