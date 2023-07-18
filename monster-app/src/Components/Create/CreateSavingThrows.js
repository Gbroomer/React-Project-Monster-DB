

function CreateSavingThrows({ handleSavingThrow, handleProficiencyChangeST, savingThrow }) {
    return (
        <>
            <h4>Saving Throws:</h4>
            <ol>
                <li>
                    <label>Strength Saving Throw
                        <input type="checkbox" checked={savingThrow.STR} onChange={(e) => handleSavingThrow("STR", e.target.checked)} />
                    </label>
                    {savingThrow.STR && (
                        <label className="saving-throw">Value:
                            <input type="number" id="str_value" name="STR" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Dexterity Saving Throw
                        <input type="checkbox" checked={savingThrow.DEX} onChange={(e) => handleSavingThrow("DEX", e.target.checked)} />
                    </label>
                    {savingThrow.DEX && (
                        <label className="saving-throw">Value:
                            <input type="number" id="dex_value" name="DEX" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Constitution Saving Throw
                        <input type="checkbox" checked={savingThrow.CON} onChange={(e) => handleSavingThrow("CON", e.target.checked)} />
                    </label>
                    {savingThrow.CON && (
                        <label className="saving-throw">Value:
                            <input type="number" id="con_value" name="CON" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Intelligence Saving Throw
                        <input type="checkbox" checked={savingThrow.INT} onChange={(e) => handleSavingThrow("INT", e.target.checked)} />
                    </label>
                    {savingThrow.INT && (
                        <label className="saving-throw">Value:
                            <input type="number" id="int_value" name="INT" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Wisdom Saving Throw
                        <input type="checkbox" checked={savingThrow.WIS} onChange={(e) => handleSavingThrow("WIS", e.target.checked)} />
                    </label>
                    {savingThrow.WIS && (
                        <label className="saving-throw">Value:
                            <input type="number" id="wis_value" name="WIS" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
                <li>
                    <label>Charisma Saving Throw
                        <input type="checkbox" checked={savingThrow.CHA} onChange={(e) => handleSavingThrow("CHA", e.target.checked)} />
                    </label>
                    {savingThrow.CHA && (
                        <label className="saving-throw">Value:
                            <input type="number" id="cha_value" name="CHA" placeholder="0" onChange={(e) => handleProficiencyChangeST(e)} />
                        </label>
                    )}
                </li>
            </ol>
        </>
    )
}

export default CreateSavingThrows