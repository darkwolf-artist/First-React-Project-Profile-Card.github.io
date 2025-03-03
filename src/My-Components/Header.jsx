import React from 'react'

const Header = () => {
  return (
    <div className="container-card">

      <img src="images/saqlain.jpg" alt="Profile-Image" className='profile-pic' />

      <h2 className="name">Muhammad Saqlain Shoukat</h2>

      <p className="skills">Currently I am Student but hands on web development and Red Teams.</p>

      <div className="social-links">
        <a href="https://www.youtube.com/@CodingChatRoom" target='_blank'>YouTube</a>
        <a href="https://www.youtube.com/playlist?list=PL-Y4YkNs_EJHZxzuxzhishpc6XygJf4Um" target='_blank'>Course</a>
      </div>
    </div>
  )
}

export default Header
