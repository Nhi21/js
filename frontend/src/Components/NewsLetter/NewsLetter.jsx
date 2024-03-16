import React from 'react'
import './NewsLetter.css'
const NewsLetter = () => {
    return (
        <div className='newsletter'>
            <h1>Nhận ưu đãi độc quyền trên email của bạn</h1>
            <p>Đăng ký nhận bản tin của chúng tôi và luôn cập nhật</p>
            <div>
                <input type="email" placeholder='Your Email id' />
                <button>SUBCRIBE</button>
            </div>
        </div>
    )
}
export default NewsLetter