function CreateStats({ handleChange }) {
    return (
        <>
            <h4>Stats:</h4>
            <ul>
                <li>
                    <label>Strength:
                        <input type="number" id="strength_stat" name="str_stat" placeholder="10" onChange={(e) => {
                            const index = 'strength'
                            const value = e.target.value
                            handleChange(index, value)
                        }} />
                    </label>
                </li>
                <li>
                    <label>Dexterity:
                        <input type="number" id="dexterity_stat" name="dex_stat" placeholder="10" onChange={(e) => {
                            const index = 'dexterity'
                            const value = e.target.value
                            handleChange(index, value)
                        }} />
                    </label>
                </li>
                <li>
                    <label>Constitution:
                        <input type="number" id="constitution_stat" name="con_stat" placeholder="10" onChange={(e) => {
                            const index = 'constitution'
                            const value = e.target.value
                            handleChange(index, value)
                        }} />
                    </label>
                </li>
                <li>
                    <label>Intelligence:
                        <input type="number" id="intelligence_stat" name="int_stat" placeholder="10" onChange={(e) => {
                            const index = 'intelligence'
                            const value = e.target.value
                            handleChange(index, value)
                        }} />
                    </label>
                </li>
                <li>
                    <label>Wisdom:
                        <input type="number" id="wisdom_stat" name="wis_stat" placeholder="10" onChange={(e) => {
                            const index = 'wisdom'
                            const value = e.target.value
                            handleChange(index, value)
                        }} />
                    </label>
                </li>
                <li>
                    <label>Charisma:
                        <input type="number" id="charisma_stat" name="cha_stat" placeholder="10" onChange={(e) => {
                            const index = 'charisma'
                            const value = e.target.value
                            handleChange(index, value)
                        }} />
                    </label>
                </li>
            </ul>
        </>
    )
}
export default CreateStats