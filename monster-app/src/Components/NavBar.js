import { useRef, useState } from "react"
import { NavLink } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css";


function NavBar({ userLogin, userSignUp, userLogged, user }) {

    const [loginType, setLoginType] = useState(false)
    const [homeClick, setHomeClick] = useState(true)
    const [monsterClick, setMonsterClick] = useState(false)
    const [createClick, setCreateClick] = useState(false)
    const [alertVisible, setAlertVisible] = useState(false)


    // const linkStyles = {
    //     background: "grey",
    //     cursor: "pointer",
    //     borderRadius: "50px",
    //     margin: "25px 20px",
    //     marginTop: "75px",
    //     color: "White",
    //     padding: "5px",
    //     fontFamily: "Papyrus",
    //     fontSize: "25px",
    //     fontWeight: "bold",
    //     textDecoration: 'none'
    // }
    // const linkStylesClicked = {
    //     background: "red",
    //     cursor: "pointer",
    //     borderRadius: "50px",
    //     margin: " 0px 20px",
    //     width: "75px",
    //     color: "White",
    //     fontFamily: "Papyrus",
    //     fontSize: "25px",
    //     fontWeight: "bold",
    //     textDecoration: "none"
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
                password: password,
                encounters: []
            }
            if (loginType) {
                userSignUp(user)
            } else {
                userLogin(user)
            }
        } else {
            setAlertVisible(true);
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
                    <form id="Login" className="User-Login bg-dark" onSubmit={(e) => handleLogin(e)}>
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
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid d-flex justify-content-between">
                <div>
                    {alertVisible && (
                        <div className="alert alert-danger" role="alert">
                            Please Input All Fields
                        </div>
                    )}
                    <CheckLogged />
                </div>

                <div>
                    <NavLink className="navbar-brand" to="/" onClick={navHome}>

                    </NavLink>
                </div>

                <ul className="navbar-nav mx-auto">
                    <li className="nav-item">
                        <NavLink
                            className={`nav-link btn btn-primary ${homeClick ? "active" : ""
                                }`}
                            to="/"
                            onClick={navHome}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={`nav-link btn btn-success ${monsterClick ? "active" : ""
                                }`}
                            to="/Monsters"
                            onClick={navMonster}
                        >
                            Monsters
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink
                            className={`nav-link btn btn-danger ${createClick ? "active" : ""
                                }`}
                            to="/Create-Monster"
                            onClick={navCreate}
                        >
                            Create
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default NavBar;