import { useState } from "react"

export default function SignUpForm({  setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [successMessage, setSuccessMessage] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();
        if(
            username.length < 6
        ){
            setError(
                "username must be greater than 6 characters"
            ) 
            return
        }
        try {
            console.log( username, password, "this is within the triblock of handleSubmit")
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                body: JSON.stringify({ username: username, password: password })
            });
            const result = await response.json();
            setToken(result.token)
            console.log(result);
            setSuccessMessage(result.message);
        } catch (error) { setError(error.message); }

    }

    return (
        <>
            <h2>Sign Up</h2>
            {successMessage && <p>{successMessage}</p>}
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username: {""}
                    <input value={username} onChange={(e) => { setUsername(e.target.value) }} />
                </label>
                <br />
                <label>
                    Password:{""}
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </label>
                <br />
                <br />
                <button>Submit</button>
            </form>
        </>

    )
}