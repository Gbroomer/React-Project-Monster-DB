import { useRef, useState } from "react"
import { NavLink } from "react-router-dom"


function NavBar({ userLogin, userSignUp, userLogged, user }) {

    const [loginType, setLoginType] = useState(false)
    const [homeClick, setHomeClick] = useState(true)
    const [monsterClick, setMonsterClick] = useState(false)
    const [createClick, setCreateClick] = useState(false)


    const linkStyles = {
        background: "grey",
        cursor: "pointer",
        borderRadius: "50px",
        margin: "25px 20px",
        marginTop: "75px",
        color: "White",
        padding: "5px",
        fontFamily: "Papyrus",
        fontSize: "25px",
        fontWeight: "bold",
        textDecoration: 'none'
    }
    const linkStylesClicked = {
        background: "red",
        cursor: "pointer",
        borderRadius: "50px",
        margin: " 0px 20px",
        width: "75px",
        color: "White",
        fontFamily: "Papyrus",
        fontSize: "25px",
        fontWeight: "bold",
        textDecoration: "none"
    }
    //     display: "inline-block",
    //     width: "50px",
    //     padding: "12px",
    //     margin: "0 6px 6px",
    //     background: "red",
    //     textDecoration: "none",
    //     color: "White",
    // }

    const usernameLogin = useRef()
    const userPassLogin = useRef()

    function handleLogin(e) {
        e.preventDefault()
        const name = usernameLogin.current.value
        const password = userPassLogin.current.value
        if (name && password) {
            const user = {
                name: name,
                password: password
            }
            if (loginType) {
                userSignUp(user)
            } else {
                userLogin(user)
            }
        } else {
            alert('Please Input All Fields')
        }

        e.target.reset()

    }

    function handleSwitch() {
        setLoginType(!loginType)
    }

    function CheckLogged() {
        if (!userLogged) {
            return (
                <div>
                    <form id="Login" className="User-Login" onSubmit={(e) => handleLogin(e)}>
                        <div>
                            <h4>{loginType ? "Sign-Up:" : "Login:"}</h4>
                        </div>
                        <div>
                            <input type="text" name="username" placeholder="Username" ref={usernameLogin} />
                        </div>
                        <div>
                            <input type="password" name="password" placeholder="Password" ref={userPassLogin} />
                        </div>
                        <input type="submit" value="Submit" />
                    </form>
                    <div>
                        <button onClick={handleSwitch}>{loginType ? "Have an account? Click to Login" : "New Here? Click to Sign Up"}</button>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>Welcome {user.name}!</h2>
                    {user.encounters.length === 0 && (
                        <p>To get started, click on the Monsters link on top and follow the guide to begin building and saving your encounter list!</p>
                    )}
                </div>
            )
        }
    }

    function navHome() {
        setHomeClick(true)
        setMonsterClick(false)
        setCreateClick(false)
    }
    function navMonster() {
        setHomeClick(false)
        setMonsterClick(true)
        setCreateClick(false)
    }
    function navCreate() {
        setHomeClick(false)
        setMonsterClick(false)
        setCreateClick(true)
    }

    return (
        <div>
            <NavLink
                to="/"
                style={homeClick ? linkStylesClicked : linkStyles}
                onClick={navHome}
                activestyle={{
                    background: "lightred"
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/Monsters"
                style={monsterClick ? linkStylesClicked : linkStyles}
                onClick={navMonster}
                activestyle={{
                    background: "lightred"
                }}
            >
                Monsters
            </NavLink>
            <NavLink
                to="/Create-Monster"
                style={createClick ? linkStylesClicked : linkStyles}
                onClick={navCreate}
                activestyle={{
                    background: "lightred"
                }}
            >
                Create
            </NavLink>
            <div>
                <CheckLogged />
            </div>
        </div>
    )
}

export default NavBar