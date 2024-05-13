import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import logoSingup from '../Components/Assets/logo-singup.png'
import imageback from '../Components/Assets/background.png'

const LoginSignup = () => {

    const [state, setState] = useState("Login");
    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: ""
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const login = async () => {
        console.log("Login Function Executed", formData);
        console.log("Signup Function Executed", formData);
        let responseData;
        await fetch('http://localhost:4000/login', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data) => responseData = data)
        if (responseData.success) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        }
        else {
            alert(responseData.errors)
        }
    };
    const signup = async () => {
        console.log("Signup Function Executed", formData);
        let responseData;
        await fetch('http://localhost:4000/signup', {
            method: 'POST',
            headers: {
                Accept: 'application/form-data',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        }).then((response) => response.json()).then((data) => responseData = data)
        if (responseData.succer) {
            localStorage.setItem('auth-token', responseData.token);
            window.location.replace("/");
        }
        else {
            alert(responseData.errors)
        }
    };

    return (
        <div className='loginsignup'>
            <div className="Background">
                <img src={imageback} className='img' alt="" />
            </div>
            <div className="loginsignup-container">
                <img src={logoSingup} className='logoKT' alt="" />
                <h1>{state}</h1>
                <div className="loginsignup-fields">
                    {state === "Sign Up" ? <input name='username' value={formData.username} onChange={changeHandler} type="text" placeholder='Your Name' /> : <></>}
                    <input name='email' value={formData.email} onChange={changeHandler} type="email" placeholder='Email Address' />
                    <input name='password' value={formData.password} onChange={changeHandler} type="password" placeholder='Password' />
                </div>
                <button onClick={() => { state === "Login" ? login() : signup() }} >Continue</button>
                {state === "Sign Up"
                    ? <p className='loginsignup-login'>Bạn đã có tài khoản? <span onClick={() => { setState("Login") }} >Đăng nhập</span></p>
                    : <p className='loginsignup-login'>Tạo tài khoản? <span onClick={() => { setState("Sign Up") }} >Click here</span></p>}
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>Tôi đồng ý với điều khoản sử dụng & chính sách bảo mật.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup