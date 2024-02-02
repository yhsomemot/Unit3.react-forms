import { useState } from "react"

export default function SignUpForm({ setToken }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setToken(result.token)
            const response = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
                method: "POST",
                body: JSON.stringify({ username, password })
            });
            const result = await response.json();
            console.log(result);
        } catch (error) { setError(error.message); }

    }

    return (
        <>
            <h2>Sign Up</h2>
            {/* what does this do? */}
            {error && <p>{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Username: {""}
                    <input value={username} onChange={(e) => { setUsername(e.target.value) }} />
                </label>
                <label>
                    Password:{""}
                    <input type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                </label>
                <button>Submit</button>
            </form>
        </>

    )
}