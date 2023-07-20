import CreateConditionInput from "./CreateConditionInput"
import { useState } from "react"

function CreateDamageConditions({handleChange, createdMonster}) {
    const [damVuln, setDamVuln] = useState([0])
    const [damRes, setDamRes] = useState([0])
    const [damIm, setDamIm] = useState([0])
    const [conIm, setConIm] = useState([0])

    const damageVulnerabilities = damVuln.map((index) => <CreateConditionInput type={"damage_vulnerabilities"} handleChange={handleChange} createdMonster={createdMonster} key={index} index = {index} removeCond={removeCond}/>)
    const damageResistances = damRes.map((index) => <CreateConditionInput type={"damage_resistances"} handleChange={handleChange} createdMonster={createdMonster} key={index} index = {index} removeCond={removeCond}/>)
    const damageImmunities = damIm.map((index) => <CreateConditionInput type={"damage_immunities"} handleChange={handleChange} createdMonster={createdMonster} key={index} index = {index} removeCond={removeCond}/>)
    const conditionImmunities = conIm.map((index) => <CreateConditionInput type={"condition_immunities"} handleChange={handleChange} createdMonster={createdMonster} key={index} index= {index} removeCond={removeCond}/>)

    function adjustDamVuln(truthyness, index, type) {
        if(truthyness) {
            setDamVuln(damVuln => [...damVuln, (damVuln.length -1) + 1])
        } else {
            setDamVuln((prevDamVuln) => {
                let updatedDamVuln = [...prevDamVuln]
                updatedDamVuln.splice(index, 1)

                for(let i=index; i < updatedDamVuln.length; i++) {
                    updatedDamVuln[i] = updatedDamVuln[i] - 1;
                }
                return updatedDamVuln
            })
            let updatedArray = [...createdMonster[type]]
            updatedArray.splice(index, 1)
            handleChange(type, updatedArray)
        }
    }
    function adjustDamRes(truthyness, index, type) {
        if(truthyness) {
            setDamRes(damRes => [...damRes, (damRes.length -1) + 1])
        } else {
            setDamRes((prevDamRes) => {
                let updatedDamRes = [...prevDamRes]
                updatedDamRes.splice(index, 1)

                for(let i=index; i < updatedDamRes.length; i++) {
                    updatedDamRes[i] = updatedDamRes[i] - 1;
                }
                return updatedDamRes
            })
            let updatedArray = [...createdMonster[type]]
            updatedArray.splice(index, 1)
            handleChange(type, updatedArray)
        }
    }
    function adjustDamIm(truthyness, index, type) {
        if(truthyness) {
            setDamIm(damIm => [...damIm, (damIm.length - 1) + 1])
        } else {
            setDamIm((prevDamIm) => {
                let updatedDamIm = [...prevDamIm]
                updatedDamIm.splice(index, 1)

                for(let i=index; i < updatedDamIm.length; i++) {
                    updatedDamIm[i] = updatedDamIm[i] - 1;
                }
                return updatedDamIm
            })
            let updatedArray = [...createdMonster[type]]
            updatedArray.splice(index, 1)
            handleChange(type, updatedArray)
        }
    }
    function adjustConIm(truthyness, index, type) {
        if(truthyness) {
            setConIm(conIm => [...conIm, (conIm.length - 1) + 1])
        } else {
            setDamVuln((prevConIm) => {
                let updatedConIm = [...prevConIm]
                updatedConIm.splice(index, 1)

                for(let i=index; i < updatedConIm.length; i++) {
                    updatedConIm[i] = updatedConIm[i] - 1;
                }
                return updatedConIm
            })
            let updatedArray = [...createdMonster[type]]
            updatedArray.splice(index, 1)
            handleChange(type, updatedArray)
        }
    }
    function removeCond(e, index, type) {
        e.preventDefault()
        if(type === "damage_vulnerabilities") {
            adjustDamVuln(false, index, type)
        } if(type === "damage_resistances") {
            adjustDamRes(false, index, type)
        } if(type === "damage_immunities") {
            adjustDamIm(false, index, type)
        } if(type === "condition_immunities") {
            adjustConIm(false, index, type)
        }
    }
    return (
        <>
            <div className="damage_vulnerabilities">
                <h5>Damage Vulnerabilities:</h5>
                <form className="damage_vulnerabilities_form">
                    {damageVulnerabilities}
                </form>
                <button onClick={() => adjustDamVuln(true)}>Add New Damage Vulnerability</button>
            </div>
            <div className="damage_resistances">
                <h5>Damage Resistances: </h5>
                <form className="damage_resistances_form">
                    {damageResistances}
                </form>
                <button onClick={() => adjustDamRes(true)}>Add New Damage Resistance</button>
            </div>
            <div className="damage_immunities">
                <h5>Damage Immunities: </h5>
                <form className="damage_immunities_form">
                    {damageImmunities}
                </form>
                <button onClick={() => adjustDamIm(true)}>Add New Damage Immunity</button>
            </div>
            <div className="condition_immunities">
                <h5>Condition Immunities: </h5>
                <form className="condition_immunities_form">
                    {conditionImmunities}
                </form>
                <button onClick={() => adjustConIm(true)}>Add New Condition Immunity</button>
            </div>
        </>

    )

}

export default CreateDamageConditions