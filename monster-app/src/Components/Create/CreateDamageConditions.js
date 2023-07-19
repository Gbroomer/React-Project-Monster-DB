import CreateConditionInput from "./CreateConditionInput"
import { useState } from "react"

function CreateDamageConditions() {
    const [damVuln, setDamVuln] = useState([1])
    const [damRes, setDamRes] = useState([1])
    const [damIm, setDamIm] = useState([1])
    const [conIm, setConIm] = useState([1])

    const damageVulnerabilities = damVuln.map(() => <CreateConditionInput damType={"damage_vulnerabilities"} />)
    const damageResistances = ''
    const damageImmunities = ''
    const conditionImmunities = ''

    function adjustDamVuln(truthiness) {
        if (truthiness) {

        }
        else {
            setDamVuln(damVuln => [...damVuln, 1])
        }
    }
    function adjustDamRes(truthiness) {
        if (truthiness) {

        }
        else {
            setDamRes(damRes => [...damRes, 1])
        }
    }
    function adjustDamIm(truthiness) {
        truthiness.preventDefault()
        if (truthiness) {

        }
        else {
            setDamIm(damIm => [...damIm, 1])
        }
    }
    function adjustConIm(truthiness) {
        truthiness.preventDefault()
        if (truthiness) {

        }
        else {
            setConIm(conIm => [...conIm, 1])
        }
    }

    console.log(damVuln, damRes, damIm, conIm)

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