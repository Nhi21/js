import React from 'react'
import './Offers.css'
import exclucive_image from '../Assets/exclusive_image.png'

const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Giảm giá</h1>
        <h1>Ưu đãi dành cho bạn</h1>
        <p>BEST SELLERS PRODUCT</p>
        <button>Kiểm tra ngay</button>
      </div>
      <div className="offers-right">
        <img src={exclucive_image} alt="" />
      </div>
    </div>
  )
}
export default Offers