import { useState } from "react"
import CreateSavingThrows from "./CreateSavingThrows"
import CreateSkills from "./CreateSkills"
import CreateStats from "./CreateStats"
import CreateSpeed from "./CreateSpeed"
import CreateDamageConditions from "./CreateDamageConditions"
import CreateSenses from "./CreateSenses"
import CreateSpecialAbilities from "./CreateSpecialAbilities"
import "bootstrap/dist/css/bootstrap.min.css";

function CreateForm({ pushNewMonster }) {
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
    const [senses, setSenses] = useState({
        tremorsense: false,
        darkvision: false,
        blindsight: false,
        truesight: false
    })
    const [createdMonster, setCreatedMonster] = useState({
        index: '',
        name: '',
        size: 'small',
        type: 'abberation',
        alignment: 'lawful good',
        armor_class: [{
            type: '',
            value: ''
        }],
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
        damage_vulnerabilities: [],
        damage_resistances: [],
        damage_immunities: [],
        condition_immunities: [],
        senses: {},
        languages: [],
        challenge_rating: '',
        xp: '',
        special_abilities: [],
        actions: [],
        legendary_actions: []
    })

    console.log(createdMonster)

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
                        name: `Saving-Throw: ${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`,
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
    const handleSenses = (name, checked) => {
        setSenses((prevState) => ({
            ...prevState,
            [name]: checked
        }))
        if (!checked) {
            const updateSenses = { ...createdMonster.senses }
            delete updateSenses[name]
            handleChange(`senses`, updateSenses)
        }
    }
    const handleSensesChange = (e) => {
        const { name, value } = e.target
        handleChange("senses", { ...createdMonster.senses, [name]: value })
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
                        name: `Skill: ${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}`,
                    }
                }
                handleChange("proficiencies", [...createdMonster.proficiencies, newProficiency])
            }
        }
    }
    return (
        <div className="container">
            <form className="Create-Form">
                <div className="mb-3">
                    <label className="form-label">Name:
                        <input
                            required
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Monster"
                            onChange={(e) => {
                                handleChange('name', e.target.value)
                                const indexify = e.target.value.toLowerCase().replace(/\s+/g, '-')
                                handleChange('index', indexify)
                            }}
                        />
                    </label>
                </div>
            </form>
            <form className="size_form">
                <div className="mb-3">
                    <label className="form-label">Size:
                        <select
                            className="form-select"
                            id="size"
                            name="size"
                            onChange={(e) => {
                                const index = "size";
                                const value = e.target.value;
                                handleChange(index, value);
                            }}
                        >
                            <option value="Small">Small</option>
                            <option value="Medium">Medium</option>
                            <option value="Large">Large</option>
                            <option value="Huge">Huge</option>
                        </select>
                    </label>
                </div>
            </form>
            <form className="type_form">
                <div className="mb-3">
                    <label className="form-label">Type:
                        <select
                            className="form-select"
                            id="Type"
                            name="Type"
                            onChange={(e) => {
                                const index = "type";
                                const value = e.target.value;
                                handleChange(index, value);
                            }}
                        >
                            <option value="aberration">Aberration</option>
                            <option value="beast">Beast</option>
                            <option value="celestial">Celestial</option>
                            <option value="construct">Construct</option>
                            <option value="dragon">Dragon</option>
                            <option value="elemental">Elemental</option>
                            <option value="fey">Fey</option>
                            <option value="fiend">Fiend</option>
                            <option value="giant">Giant</option>
                            <option value="humanoid">Humanoid</option>
                            <option value="monstrosity">Monstrosity</option>
                            <option value="ooze">Ooze</option>
                            <option value="plant">Plant</option>
                            <option value="undead">Undead</option>
                        </select>
                    </label>
                </div>
            </form>
            <form className="alignment_form">
                <div className="mb-3">
                    <label className="form-label">Alignment:
                        <select
                            className="form-select"
                            id="alignment"
                            name="alignment"
                            onChange={(e) => {
                                const index = "alignment";
                                const value = e.target.value;
                                handleChange(index, value);
                            }}
                        >
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
            </form>
            <form className="ac_form">
                <div className="mb-3">
                    <label className="form-label">Armor Class - Number:
                        <input

                            type="number"
                            className="form-control"
                            id="armor-class"
                            name="AC"
                            placeholder="10"
                            onChange={(e) => {
                                const index = "armor_class";
                                const value = [{
                                    type: createdMonster.armor_class[0].type,
                                    value: e.target.value
                                }];
                                handleChange(index, value);
                            }}
                        />
                    </label>
                </div>
                <div className="mb-3">
                    <label className="form-label">Armor Class - Type:
                        <input

                            type="text"
                            className="form-control"
                            id="armor-class-type"
                            name="AC"
                            placeholder="Natural"
                            onChange={(e) => {
                                const index = "armor_class";
                                const value = [{
                                    type: e.target.value,
                                    value: createdMonster.armor_class[0].value
                                }];
                                handleChange(index, value);
                            }}
                        />
                    </label>
                </div>
            </form>
            <form className="hp_form">
                <div className="mb-3">
                    <h5>Hit Points:</h5>


                    <label className="form-label">Hit Point Total:
                        <input
                            type="number"
                            className="form-control"
                            id="hit_points"
                            name="HP"
                            placeholder="10"
                            onChange={(e) => {
                                const index = "hit_points";
                                const value = e.target.value;
                                handleChange(index, value);
                            }}
                        />
                    </label>


                    <label className="form-label">Hit Points Dice Roll:
                        <input

                            type="text"
                            className="form-control"
                            id="hit_points_roll"
                            name="HP Dice"
                            placeholder="ex: 1d10+4"
                            onChange={(e) => {
                                const index = "hit_points_roll";
                                const value = e.target.value;
                                handleChange(index, value);
                            }}
                        />
                    </label>


                </div>
            </form>
            <form className="speed_form">
                <div className="mb-3">
                    <h3>Speed:</h3>
                    <label className="form-label">Walk Speed:
                        <input
                            type="number"
                            className="form-control"
                            id="walk-speed"
                            name="walk_speed"
                            placeholder="30"
                            onChange={(e) => {
                                handleChange("speed", { ...createdMonster.speed, walk: e.target.value });
                            }}
                        />
                    </label>
                    <label className="form-label">Swim Speed:
                        <input
                            type="number"
                            className="form-control"
                            id="swim-speed"
                            name="swim_speed"
                            placeholder="0"
                            onChange={(e) => {
                                handleChange("speed", { ...createdMonster.speed, swim: e.target.value });
                            }}
                        />
                    </label>
                    <label className="form-label">Fly Speed:
                        <input
                            type="number"
                            className="form-control"
                            id="fly-speed"
                            name="fly_speed"
                            placeholder="0"
                            onChange={(e) => {
                                handleChange("speed", { ...createdMonster.speed, fly: e.target.value });
                            }}
                        />
                    </label>
                    <label className="form-label">Climb Speed:
                        <input
                            type="number"
                            className="form-control"
                            id="climb-speed"
                            name="climb_speed"
                            placeholder="0"
                            onChange={(e) => {
                                handleChange("speed", { ...createdMonster.speed, climb: e.target.value });
                            }}
                        />
                    </label>
                    <label className="form-label">Burrow Speed:
                        <input
                            type="number"
                            className="form-control"
                            id="burrow-speed"
                            name="burrow_speed"
                            placeholder="0"
                            onChange={(e) => {
                                handleChange("speed", { ...createdMonster.speed, burrow: e.target.value });
                            }}
                        />
                    </label>
                </div>


                <div className="mb-3">
                    <h3>Stats:</h3>
                    <label className="form-label">Strength:
                        <input
                            type="number"
                            className="form-control"
                            id="strength"
                            name="strength"
                            placeholder="10"
                            onChange={(e) => {
                                handleChange("strength", e.target.value);
                            }}
                        />
                    </label>
                    <label className="form-label">Dexterity:
                        <input
                            type="number"
                            className="form-control"
                            id="dexterity"
                            name="dexterity"
                            placeholder="10"
                            onChange={(e) => {
                                handleChange("dexterity", e.target.value);
                            }}
                        />
                    </label>
                    <label className="form-label">Constitution:
                        <input
                            type="number"
                            className="form-control"
                            id="constitution"
                            name="constitution"
                            placeholder="10"
                            onChange={(e) => {
                                handleChange("constitution", e.target.value);
                            }}
                        />
                    </label>
                    <label className="form-label">Intelligence:
                        <input
                            type="number"
                            className="form-control"
                            id="intelligence"
                            name="intelligence"
                            placeholder="10"
                            onChange={(e) => {
                                handleChange("intelligence", e.target.value);
                            }}
                        />
                    </label>
                    <label className="form-label">Wisdom:
                        <input
                            type="number"
                            className="form-control"
                            id="wisdom"
                            name="wisdom"
                            placeholder="10"
                            onChange={(e) => {
                                handleChange("wisdom", e.target.value);
                            }}
                        />
                    </label>
                    <label className="form-label">Charisma:
                        <input
                            type="number"
                            className="form-control"
                            id="charisma"
                            name="charisma"
                            placeholder="10"
                            onChange={(e) => {
                                handleChange("charisma", e.target.value);
                            }}
                        />
                    </label>
                </div>


                <div className="mb-3">
                    <h3>Proficiencies:</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <CreateSavingThrows
                                handleSavingThrow={handleSavingThrow}
                                handleProficiencyChangeST={handleProficiencyChangeST}
                                savingThrow={savingThrow}
                            />
                        </div>
                        <div className="col-md-6">
                            <CreateSkills
                                handleSkillCheck={handleSkillCheck}
                                handleProficiencyChangeSkill={handleProficiencyChangeSkill}
                                skill={skill}
                            />
                        </div>
                    </div>
                </div>


                <div className="mb-3">
                    <h3>Conditions:</h3>
                    <label className="form-label">Damage Vulnerabilities:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="damage_vulnerabilities"
                        name="damage_vulnerabilities"
                        placeholder="ex: poisoned"
                        onChange={(e) => {
                            handleChange("damage_vulnerabilities", e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">

                    <label className="form-label">Damage Resistances:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="damage_resistances"
                        name="damage_resistances"
                        placeholder="ex: poisoned"
                        onChange={(e) => {
                            handleChange("damage_resistances", e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">

                    <label className="form-label">Damage immunitites:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="damage_immunities"
                        name="damage_immunities"
                        placeholder="ex: poisoned"
                        onChange={(e) => {
                            handleChange("damage_immunities", e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">

                    <label className="form-label">Condition Immunities:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="condition_immunities"
                        name="condition_immunities"
                        placeholder="ex: poisoned"
                        onChange={(e) => {
                            handleChange("condition_immunities", e.target.value);
                        }}
                    />
                </div>


                <div className="mb-3">
                    <h3>Senses:</h3>
                    <CreateSenses handleSenses={handleSenses} senses={senses} handleSensesChange={handleSensesChange} />
                </div>



                <div className="mb-3">
                    <h3>Languages:</h3>
                    <form>
                        <input
                            type="text"
                            className="form-control"
                            id="languages"
                            name="languages"
                            placeholder="Common, Elvish, telepathy 120ft."
                            onChange={(e) => {
                                handleChange("languages", e.target.value);
                            }}
                        />
                    </form>
                </div>


                <div className="mb-3">
                    <h3>Challenge Rating:</h3>
                    <form>
                        <input
                            type="number"
                            className="form-control"
                            id="challenge_rating"
                            name="challenge_rating"
                            placeholder=".5, 5, 15"
                            onChange={(e) => {
                                handleChange("challenge_rating", e.target.value);
                            }}
                        />
                    </form>
                </div>


                <div className="mb-3">
                    <h3>Experience:</h3>
                    <form>
                        <input
                            type="number"
                            className="form-control"
                            id="xp"
                            name="xp"
                            placeholder="50, 250, 7500"
                            onChange={(e) => {
                                handleChange("xp", e.target.value);
                            }}
                        />
                    </form>
                </div>


                <div className="mb-3">
                    <h3>Special Abilities:</h3>
                    <CreateSpecialAbilities handleChange={handleChange} createdMonster={createdMonster} />
                </div>


                <div className="mb-3">
                    <button className="btn btn-primary" onClick={() => pushNewMonster(createdMonster)}>
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}

export default CreateForm;