
function CreateSkills({ handleProficiencyChangeST, handleSkillCheck, skill }) {
    return (
        <>
            <h4>Skills: </h4>
            <ol>
                <li>
                    <label>Acrobatics
                        <input type="checkbox" checked={skill.Acrobatics} onChange={(e) => handleSkillCheck("Acrobatics", e.target.checked)} />
                    </label>
                    {skill.Acrobatics && (
                        <label className="skill">Value:
                            <input type="number" id="acrobatics_value" name="Acrobatics" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Animal Handling
                        <input type="checkbox" checked={skill.Animal_handling} onChange={(e) => handleSkillCheck("Animal_handling", e.target.checked)} />
                    </label>
                    {skill.Animal_handling && (
                        <label className="skill">Value:
                            <input type="number" id="animal_handling_value" name="Animal_handling" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Arcana
                        <input type="checkbox" checked={skill.Arcana} onChange={(e) => handleSkillCheck("Arcana", e.target.checked)} />
                    </label>
                    {skill.Arcana && (
                        <label className="skill">Value:
                            <input type="number" id="arcana_value" name="Arcana" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Athletics
                        <input type="checkbox" checked={skill.Athletics} onChange={(e) => handleSkillCheck("Athletics", e.target.checked)} />
                    </label>
                    {skill.Athletics && (
                        <label className="skill">Value:
                            <input type="number" id="athletics_value" name="Athletics" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Deception
                        <input type="checkbox" checked={skill.Deception} onChange={(e) => handleSkillCheck("Deception", e.target.checked)} />
                    </label>
                    {skill.Deception && (
                        <label className="skill">Value:
                            <input type="number" id="deception_value" name="Deception" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>History
                        <input type="checkbox" checked={skill.History} onChange={(e) => handleSkillCheck("History", e.target.checked)} />
                    </label>
                    {skill.History && (
                        <label className="skill">Value:
                            <input type="number" id="history_value" name="History" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Insight
                        <input type="checkbox" checked={skill.Insight} onChange={(e) => handleSkillCheck("Insight", e.target.checked)} />
                    </label>
                    {skill.Insight && (
                        <label className="skill">Value:
                            <input type="number" id="insight_value" name="Insight" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Intimidation
                        <input type="checkbox" checked={skill.Intimidation} onChange={(e) => handleSkillCheck("Intimidation", e.target.checked)} />
                    </label>
                    {skill.Intimidation && (
                        <label className="skill">Value:
                            <input type="number" id="intimidation_value" name="Intimidation" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Investigation
                        <input type="checkbox" checked={skill.Investigation} onChange={(e) => handleSkillCheck("Investigation", e.target.checked)} />
                    </label>
                    {skill.Investigation && (
                        <label className="skill">Value:
                            <input type="number" id="investigation_value" name="Investigation" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Medicine
                        <input type="checkbox" checked={skill.Medicine} onChange={(e) => handleSkillCheck("Medicine", e.target.checked)} />
                    </label>
                    {skill.Medicine && (
                        <label className="skill">Value:
                            <input type="number" id="medicine_value" name="Medicine" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Nature
                        <input type="checkbox" checked={skill.Nature} onChange={(e) => handleSkillCheck("Nature", e.target.checked)} />
                    </label>
                    {skill.Nature && (
                        <label className="skill">Value:
                            <input type="number" id="nature_value" name="Nature" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Perception
                        <input type="checkbox" checked={skill.Perception} onChange={(e) => handleSkillCheck("Perception", e.target.checked)} />
                    </label>
                    {skill.Perception && (
                        <label className="skill">Value:
                            <input type="number" id="perception_value" name="Perception" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Performance
                        <input type="checkbox" checked={skill.Performance} onChange={(e) => handleSkillCheck("Performance", e.target.checked)} />
                    </label>
                    {skill.Performance && (
                        <label className="skill">Value:
                            <input type="number" id="performance_value" name="Performance" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Persuasion
                        <input type="checkbox" checked={skill.Persuasion} onChange={(e) => handleSkillCheck("Persuasion", e.target.checked)} />
                    </label>
                    {skill.Persuasion && (
                        <label className="skill">Value:
                            <input type="number" id="Persuasion_value" name="Persuasion" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Religion
                        <input type="checkbox" checked={skill.Religion} onChange={(e) => handleSkillCheck("Religion", e.target.checked)} />
                    </label>
                    {skill.Religion && (
                        <label className="skill">Value:
                            <input type="number" id="religion_value" name="Religion" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Sleight of Hand
                        <input type="checkbox" checked={skill.Sleight_of_hand} onChange={(e) => handleSkillCheck("Sleight_of_hand", e.target.checked)} />
                    </label>
                    {skill.Sleight_of_hand && (
                        <label className="skill">Value:
                            <input type="number" id="sleight_of_hand_value" name="Sleight_of_hand" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Stealth
                        <input type="checkbox" checked={skill.Stealth} onChange={(e) => handleSkillCheck("Stealth", e.target.checked)} />
                    </label>
                    {skill.Stealth && (
                        <label className="skill">Value:
                            <input type="number" id="stealth_value" name="stealth" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Survival
                        <input type="checkbox" checked={skill.Survival} onChange={(e) => handleSkillCheck("Survival", e.target.checked)} />
                    </label>
                    {skill.Survival && (
                        <label className="skill">Value:
                            <input type="number" id="survival_value" name="Survival" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>

            </ol>
        </>
    )
}

export default CreateSkills