import { useState } from "react"
import CreateSavingThrows from "./CreateSavingThrows"
import CreateSkills from "./CreateSkills"
import CreateStats from "./CreateStats"
import CreateSpeed from "./CreateSpeed"

function CreateForm() {
    const [savingThrow, setSavingThrow] = useState({
        STR: false,
        DEX: false,
        CON: false,
        INT: false,
        WIS: false,
        CHA: false
    })
    const [skill, setSkill] = useState({
        Acrobatics: false,
        Animal_handling: false,
        Arcana: false,
        Athletics: false,
        Deception: false,
        History: false,
        Insight: false,
        Intimidation: false,
        Investigation: false,
        Medicine: false,
        Nature: false,
        Perception: false,
        Performance: false,
        Persuasion: false,
        Religion: false,
        Sleight_of_hand: false,
        Stealth: false,
        Survival: false,
    })
    const [createdMonster, setCreatedMonster] = useState({
        name: '',
        size: 'small',
        type: 'abberation',
        alignment: 'lawful good',
        armor_class: {
            type: '',
            value: ''
        },
        hit_points: '',
        hit_points_roll: '',
        speed: {},
        strength: '',
        dexterity: '',
        constitution: '',
        intelligence: '',
        wisdom: '',
        charisma: '',
        proficiencies: [],
        damage_vulnerabilities: '',
        damage_resistances: '',
        damage_immunities: '',
        condition_immunities: '',
        senses: '',
        languages: '',
        challenge_rating: '',
        xp: '',
        special_abilities: '',
        actions: '',
        legendary_actions: ''
    })


    const handleChange = (index, value) => {
        setCreatedMonster((prevState) => ({
            ...prevState,
            [index]: value,
        }))
    }

    const handleSavingThrow = (name, checked) => {
        setSavingThrow((prevState) => ({
            ...prevState,
            [name]: checked
        }))
        if (!checked) {
            const proficiencyIndex = createdMonster.proficiencies.findIndex(
                (proficiency) => proficiency.proficiency.index === `saving-throw-${name.toLowerCase()}`
            );

            if (proficiencyIndex !== -1) {
                let updatedProficiencies = [...createdMonster.proficiencies];
                updatedProficiencies.splice(proficiencyIndex, 1);
                handleChange("proficiencies", updatedProficiencies);
            }
        }
    }

    const handleProficiencyChangeST = (e) => {

        const { name, value } = e.target
        const profIndex = createdMonster.proficiencies.findIndex((proficiency) => proficiency.proficiency.index === `saving-throw-${name.toLowerCase()}`)

        if (value !== "") {
            if (profIndex !== -1) {
                let updatedProficiencies = [...createdMonster.proficiencies]
                updatedProficiencies[profIndex].value = Number(value)

                handleChange("proficiencies", updatedProficiencies)
            } else {
                const newProficiency = {
                    value: Number(value),
                    proficiency: {
                        index: `saving-throw-${name.toLowerCase()}`,
                        name: `Saving-Throw: ${name.toUpperCase()}`,
                    }
                }
                handleChange("proficiencies", [...createdMonster.proficiencies, newProficiency])
            }
        }
    }
    const handleSkillCheck = (name, checked) => {
        setSkill((prevState) => ({
            ...prevState,
            [name]: checked
        }))
        if (!checked) {
            const proficiencyIndex = createdMonster.proficiencies.findIndex(
                (proficiency) => proficiency.proficiency.index === `skill-${name.toLowerCase()}`
            );

            if (proficiencyIndex !== -1) {
                let updatedProficiencies = [...createdMonster.proficiencies];
                updatedProficiencies.splice(proficiencyIndex, 1);
                handleChange("proficiencies", updatedProficiencies);
            }
        }
    }
    const handleProficiencyChangeSkill = (e) => {

        const { name, value } = e.target
        const profIndex = createdMonster.proficiencies.findIndex((proficiency) => proficiency.proficiency.index === `skill-${name.toLowerCase()}`)

        if (value !== "") {
            if (profIndex !== -1) {
                let updatedProficiencies = [...createdMonster.proficiencies]
                updatedProficiencies[profIndex].value = Number(value)

                handleChange("proficiencies", updatedProficiencies)
            } else {
                const newProficiency = {
                    value: Number(value),
                    proficiency: {
                        index: `skill-${name.toLowerCase()}`,
                        name: `Skill: ${name.toUpperCase()}`,
                    }
                }
                handleChange("proficiencies", [...createdMonster.proficiencies, newProficiency])
            }
        }
    }
    console.log(createdMonster)


    return (
        <div>
            <form className="Create-Form">
                <div className='Name'>
                    <label>Name:
                        <input required type="text" id="name" name="name" placeholder="Monster" onChange={(e) => {
                            const index = 'name'
                            const value = e.target.value
                            handleChange(index, value)
                        }} />
                    </label>
                </div>
                <div className="size">
                    <label>Size:
                        <select required id="size" name="size" onChange={(e) => {
                            const index = 'size'
                            const value = e.target.value
                            handleChange(index, value)
                        }}>
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="Huge">Huge</option>
                        </select>
                    </label>
                </div>
                <div className="Type">
                    <label>Type:
                        <select id="Type" name="Type" onChange={(e) => {
                            const index = 'type'
                            const value = e.target.value
                            handleChange(index, value)
                        }}>
                            <option value="aberration">Aberration</option>
                            <option value="beast">Beast</option>
                            <option value="celestial">Celestial</option>
                            <option value="construct">Construct</option>
                            <option value="dragon">Dragon</option>
                            <option value="elemental">Elemental</option>
                            <option value="fey">Fey</option>
                            <option value="Fiend">Fiend</option>
                            <option value="Giant">Giant</option>
                            <option value="Humanoid">Humanoid</option>
                            <option value="Monstrosity">Monstrosity</option>
                            <option value="Ooze">Ooze</option>
                            <option value="Plant">Plant</option>
                            <option value="Undead">Undead</option>
                        </select>
                    </label>
                </div>
                <div className="alignment">
                    <label>Alignment:
                        <select id="alignment" name="alignment" onChange={(e) => {
                            const index = 'alignment'
                            const value = e.target.value
                            handleChange(index, value)
                        }}>
                            <option value="lawful good">Lawful Good</option>
                            <option value="neutral good">Neutral Good</option>
                            <option value="chaotic good">Chaotic Good</option>
                            <option value="lawful neutral">Lawful Neutral</option>
                            <option value="true neutral">True Neutral</option>
                            <option value="chaotic neutral">chaotic neutral</option>
                            <option value="lawful evil">Lawful Evil</option>
                            <option value="neutral evil">Neutral Evil</option>
                            <option value="chaotic evil">Chaotic Evil</option>
                        </select>
                    </label>
                </div>
                <div className="armor_class">
                    <p>Armor Class:</p>
                    <label>Number:
                        <input required type="number" id="armor-class" name="AC" placeholder="10" onChange={(e) => {
                            const index = 'armor_class'
                            const value = {
                                type: createdMonster.armor_class.type,
                                value: e.target.value
                            }
                            handleChange(index, value)
                        }} />
                    </label>
                    <label>Type:
                        <input required type="text" id="armor-class-type" name="AC" placeholder="Natural" onChange={(e) => {
                            const index = 'armor_class'
                            const value = {
                                type: e.target.value,
                                value: createdMonster.armor_class.value
                            }
                            handleChange(index, value)
                        }} />
                    </label>
                </div>
                <div className="hit_points">
                    <h5>Hit Points:</h5>
                    <ul>
                        <li>
                            <label>Hit Point Total:
                                <input required type="number" id="hit_points" name="HP" placeholder="10" onChange={(e) => {
                                    const index = 'hit_points'
                                    const value = e.target.value
                                    handleChange(index, value)
                                }} />
                            </label>
                        </li>
                        <li>
                            <label>Hit Points Dice Roll:
                                <input required type="text" id="hit_points_roll" name="HP Dice" placeholder="ex: 1d10+4" onChange={(e) => {
                                    const index = 'hit_points_roll'
                                    const value = e.target.value
                                    handleChange(index, value)
                                }} />
                            </label>
                        </li>
                    </ul>
                </div>
                <div speed="speed">
                    <CreateSpeed handleChange={handleChange} createdMonster={createdMonster} />
                </div>
                <div className="stats">
                    <CreateStats handleChange = { handleChange } />
                    
                </div>
                <div className="proficiencies">
                    <CreateSavingThrows handleSavingThrow = { handleSavingThrow } handleProficiencyChangeST = { handleProficiencyChangeST } savingThrow = { savingThrow } />
                    <CreateSkills handleSkillCheck={handleSkillCheck} handleProficiencyChangeSkill={handleProficiencyChangeSkill} skill = { skill } />
                </div>
            </form>

        </div>
    )
}

export default CreateForm