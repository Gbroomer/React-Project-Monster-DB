function CreateSenses({ handleSenses, senses, handleSensesChange }) {
    return (
        <>
            <ul>
                <li>
                    <label>Passive Perception:
                        <input type="number" id="passive_perception_value" name="passive_perception" placeholder="10" onChange={(e) => handleSensesChange(e)} />
                    </label>
                </li>
                <li>
                    <label>Blindsight
                        <input type="checkbox" checked={senses.blindsight} onChange={(e) => handleSenses("blindsight", e.target.checked)} />
                    </label>
                    {senses.blindsight && (
                        <label className="">Value:
                            <input type="number" id="blindsight_value" name="blindsight" placeholder="ex: 60" onChange={(e) => handleSensesChange(e)} />
                        </label>
                    )}
                </li> 
                <li>
                    <label>Darkvison
                        <input type="checkbox" checked={senses.darkvision} onChange={(e) => handleSenses("darkvision", e.target.checked)} />
                    </label>
                    {senses.darkvision && (
                        <label className="">Value:
                            <input type="number" id="darkvision_value" name="darkvision" placeholder="ex: 60" onChange={(e) => handleSensesChange(e)} />
                        </label>
                    )}
                </li> 
                <li>
                    <label>Tremorsense
                        <input type="checkbox" checked={senses.tremorsense} onChange={(e) => handleSenses("tremorsense", e.target.checked)} />
                    </label>
                    {senses.tremorsense && (
                        <label className="">Value:
                            <input type="number" id="tremorsense_value" name="tremorsense" placeholder="ex: 60" onChange={(e) => handleSensesChange(e)} />
                        </label>
                    )}
                </li> 
                <li>
                    <label>Truesight
                        <input type="checkbox" checked={senses.truesight} onChange={(e) => handleSenses("truesight", e.target.checked)} />
                    </label>
                    {senses.truesight && (
                        <label className="">Value:
                            <input type="number" id="truesight_value" name="truesight" placeholder="ex: 60" onChange={(e) => handleSensesChange(e)} />
                        </label>
                    )}
                </li>
                
            </ul>
        </>
    )
}

export default CreateSenses