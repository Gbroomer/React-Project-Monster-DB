function CreateSpeed({ handleChange, createdMonster }) {
    return (
        <>
            <p>Speed:</p>
            <ul>
                <li>
                    <label>Walk:
                        <input type="number" id="walk_speed" name="walk_speed" placeholder="ex: 30" onChange={(e) => {
                            const index = 'speed'
                            const value = {
                                ...createdMonster.speed,
                                walk: e.target.value + " ft.",
                            }
                            handleChange(index, value)
                        }} />
                    </label>
                </li>
                <li>
                    <label>Swim:
                        <input type="number" id="swim_speed" name="swim_speed" placeholder="ex: 30" onChange={(e) => {
                            const index = 'speed'
                            const value = {
                                ...createdMonster.speed,
                                swim: e.target.value + " ft.",
                            }
                            handleChange(index, value)
                        }} />
                    </label>
                </li>
                <li>
                    <label>Climb:
                        <input type="number" id="climb_speed" name="climb_speed" placeholder="ex: 30" onChange={(e) => {
                            const index = 'speed'
                            const value = {
                                ...createdMonster.speed,
                                climb: e.target.value + " ft.",
                            }
                            handleChange(index, value)
                        }} />
                    </label>
                </li>
                <li>
                    <label>Fly:
                        <input type="number" id="fly_speed" name="fly_speed" placeholder="ex: 30" onChange={(e) => {
                            const index = 'speed'
                            const value = {
                                ...createdMonster.speed,
                                fly: e.target.value + " ft.",
                            }
                            handleChange(index, value)
                        }} />
                    </label>
                </li>
            </ul>
        </>
    )
}
export default CreateSpeed