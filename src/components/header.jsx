import React from 'react'

const Header = () => {
  const URL_RESUME = 'https://drive.google.com/file/d/12z4DzpnXjlks-hDA9DTvxCkFZm11C2ys/view?usp=sharing'

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
        <a className="btn" href={URL_RESUME} target='_blank'>
          Download CV
        </a>
      </div>
    </header>
  )
}

export default Header