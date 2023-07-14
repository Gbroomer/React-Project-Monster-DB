import { useRef } from "react"
import { NavLink } from "react-router-dom"


function NavBar({ userLogin, userSignUp }) {

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
    const usernameSignUp = useRef()
    const userPassSignUp = useRef()
    
    function handleLogin(e) {
        e.preventDefault()
        const username = usernameLogin.current.value
        const password = userPassLogin.current.value
        if (username && password ) {
            const user ={
                username: username,
                password: password
            }
            console.log(user)
            userLogin(user)
        } else {
            alert('Please Input All Fields')
        }

       e.target.reset()
       
    }
    function handleSignUp(e) {
        e.preventDefault()
        const username = usernameLogin.current.value
        const password = userPassLogin.current.value
        if(username && password) {
            const user ={
                username: username,
                password: password
            }
            console.log(user)
            userSignUp(user)
        } else {
            alert('Please Input All Fields')
        }
        e.target.reset()
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
                <form id="Login" className="User-Login" onSubmit={(e) => handleLogin(e)}>
                    <div>
                        <h4>Login:</h4>
                    </div>
                    <div>
                        <input type="text" name="username" placeholder="Username" ref={usernameLogin}/>
                    </div>
                    <div>
                        <input type="password" name="password" placeholder="Password" ref={userPassLogin}/>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                <form id="SignUp" className="User-SignUp" onSubmit={(e) => handleSignUp(e)}>
                    <div>
                        <h4>Sign-up</h4>
                    </div>
                    <div>
                        <input type="text" name="usernameSignUp" placeholder="Username" ref={usernameSignUp}/>
                    </div>
                    <div>
                        <input type="password" name="passwordSignUp" placeholder="Password" ref={userPassSignUp}/>
                    </div>
                    <input type="submit" value ="Submit" />
                </form>
            </div>
        </div>
    )
}

export default NavBar