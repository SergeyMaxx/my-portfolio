import React from 'react'

const Header = () => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__title">
          <strong>Hi, my name is <em>Sergey</em></strong> <br/>
          a frontend developer
        </h1>
        <div className="header__text">
          <p>with passion for learning and creating.</p>
        </div>
        <button className="btn">
          Download CV
        </button>
      </div>
    </header>
  )
}

export default Header