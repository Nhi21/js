import React from 'react'
import './CSS/LoginSignup.css'

const LoginSignup = () => {
    return (
        <div className='loginsignup'>
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder='Your Name' />
                    <input type="email" placeholder='Email Address' />
                    <input type="password" placeholder='Password' />
                </div>
                <button>Continue</button>
                <p className='loginsignup-login'>Bạn đã có tài khoản? <span>Đăng nhập</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name='' id='' />
                    <p>Tôi đồng ý với điều khoản sử dụng & chính sách bảo mật.</p>
                </div>
            </div>
        </div>
    )
}

export default LoginSignup
