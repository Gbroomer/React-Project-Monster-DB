import CreateConditionInput from "./CreateConditionInput"
import { useState } from "react"

function CreateDamageConditions({handleChange, createdMonster}) {
    const [damVuln, setDamVuln] = useState([0])
    const [damRes, setDamRes] = useState([0])
    const [damIm, setDamIm] = useState([0])
    const [conIm, setConIm] = useState([0])

    const damageVulnerabilities = damVuln.map((index) => <CreateConditionInput type={"damage_vulnerabilities"} handleChange={handleChange} createdMonster={createdMonster} key={index} index = {index}/>)
    const damageResistances = damRes.map((index) => <CreateConditionInput type={"damage_resistances"} handleChange={handleChange} createdMonster={createdMonster} key={index} index = {index}/>)
    const damageImmunities = damIm.map((index) => <CreateConditionInput type={"damage_immunities"} handleChange={handleChange} createdMonster={createdMonster} key={index} index = {index}/>)
    const conditionImmunities = conIm.map((index) => <CreateConditionInput type={"condition_immunities"} handleChange={handleChange} createdMonster={createdMonster} key={index} index= {index}/>)

    function adjustDamVuln(truthiness) {
        if (truthiness) {

        }
        else {
            setDamVuln(damVuln => [...damVuln, (damVuln.length -1) + 1])

        }
    }
    function adjustDamRes(truthiness) {
        if (truthiness) {

        }
        else {
            setDamRes(damRes => [...damRes, (damRes.length -1) + 1])

        }
    }
    function adjustDamIm(truthiness) {
        if (truthiness) {

        }
        else {
            setDamIm(damIm => [...damIm, (damIm.length - 1) + 1])

        }
    }
    function adjustConIm(truthiness) {
        if (truthiness) {

        }
        else {
            setConIm(conIm => [...conIm, (conIm.length - 1) + 1])
        }
    }
    return (
        <>
            <div className="damage vulnerabilities">
                <h5>Damage Vulnerabilities:</h5>
                <form className="damage_vulnerabilities_form">
                    {damageVulnerabilities}
                </form>
                <button onClick={() => adjustDamVuln(false)}>Add New Damage Vulnerability</button>
            </div>
            <div className="damage resistances">
                <h5>Damage Resistances: </h5>
                <form className="damage_resistances_form">
                    {damageResistances}
                </form>
                <button onClick={() => adjustDamRes(false)}>Add New Damage Resistance</button>
            </div>
            <div className="damage immunities">
                <h5>Damage Immunities: </h5>
                <form className="damage_immunities_form">
                    {damageImmunities}
                </form>
                <button onClick={() => adjustDamIm(false)}>Add New Damage Immunity</button>
            </div>
            <div className="conditionImmunities">
                <h5>Condition Immunities: </h5>
                <form className="condition_immunities_form">
                    {conditionImmunities}
                </form>
                <button onClick={() => adjustConIm(false)}>Add New Condition Immunity</button>
            </div>
        </>

    )

}

export default CreateDamageConditions