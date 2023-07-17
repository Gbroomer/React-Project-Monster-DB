import { useRef, useState } from "react"
import { NavLink } from "react-router-dom"


function NavBar({ userLogin, userSignUp, userLogged, user }) {

    const [loginType, setLoginType] = useState(false)

    const linkStyles = {
        display: "inline-block",
        width: "50px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "red",
        textDecoration: "none",
        color: "Black",
    }

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

    return (
        <div>
            <NavLink
                to="/"
                style={linkStyles}
                activestyle={{
                    background: "lightred"
                }}
            >
                Home
            </NavLink>
            <NavLink
                to="/Monsters"
                style={linkStyles}
                activestyle={{
                    background: "lightred"
                }}
            >
                All Monsters
            </NavLink>
            <NavLink
                to="/User"
                style={linkStyles}
                activestyle={{
                    background: "lightred"
                }}
            >
                User Info
            </NavLink>
            <div>
                <CheckLogged />
            </div>
        </div>
    )
}

export default NavBar