import React from 'react';
import './Profile.css';
//import { Body } from './components/Body/Body'
import { Header } from './components/Header/Header';
// import { Footer } from './components/Footer/Footer';

function Profile(props) {
  // Nhận thông tin tên từ props
  const userName = props.userName || 'Tên của bạn: '; // Sử dụng 'Tên của bạn' nếu không có thông tin tên từ props

  return (
    <div className="Profile">
      <Header />
      <h1>Thông tin cá nhân</h1>
      <p>{userName}Nguyễn Nhi</p>
    </div>
  );
}

export default Profile;