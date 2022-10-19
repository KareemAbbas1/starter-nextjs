import { Container } from "../../components/admin/Login";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";


const Login = () => {
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
            const res = await axios.post(`/api/auth/login`, {
                email,
                password
            });
            localStorage.setItem("user", JSON.stringify(res.data));
            router.push("/admin/dashboard");
            location.reload();
        }
        catch (error) {
            console.error("Error", error && error.response.data.message);
            setError(true);
            setErrorMessage(error && error.response.data.message)
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