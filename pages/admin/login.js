import styled from "styled-components";
import { useRouter } from "next/router";
import { useState } from "react";
import axios from "axios";


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input {
        width: 20%;
        padding: 0.7rem 0.5rem;
        font-size: 1.2rem;
        border: 1px solid;
        border-radius: 5px;
    }

    button {
        width: 13%;
        padding-block: 0.5rem;
        font-size: 1.2rem;
        font-weight: bold;
        border: 1px solid #F26630;
        background-color: #F26630;
        color: #fff;
        cursor: pointer;
        transition: all 300ms ease-in-out;

        &:hover {
            background-color: transparent;
            color: #000;
        }
    }
`

const Login = ({ setLoading }) => {
    const router = useRouter();


    if(typeof window !== "undefined") {
        const user = localStorage.getItem("user");
        if(user !== null && user !== undefined) {
            router.push("/admin/dashboard");
        }
    }

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [routeToDashboard, setRouteToDashboard] = useState(false);

    let today = new Date;
    let time = today.getTime();
    let expiresIn = time + 1000 * 29000;
    today.setTime(expiresIn);


    const handleLogin = async (req) => {
        try {
            setLoading(true);
            const res = await axios.post(`/api/auth/login`, {
                email,
                password
            });
            localStorage.setItem("user", JSON.stringify(res.data));
            router.push("/admin/dashboard");
            location.reload();
        }
        catch (error) {
            console.log("Error", error && error.response.data.message);
            setError(true);
            setErrorMessage(error && error.response.data.message);
            setLoading(false);
        }
    }


    return (
        <Container>
            <h1>Admin Dashborad</h1>
            <input
                placeholder="Enter your email"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
            /><br />

            <input
                placeholder="Enter your password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
            /><br />
            {
                error === true &&
                <span style={{ color: "red" }}>{errorMessage}</span>
            }
            <button onClick={handleLogin}>Login</button>
        </Container>
    )
}

export default Login;