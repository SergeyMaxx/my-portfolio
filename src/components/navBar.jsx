import React, {useEffect, useState} from 'react'
import sun from '../icons/sun.svg'
import moon from '../icons/moon.svg'
import {Link} from 'react-router-dom'

const NavBar = () => {
  const [state, setState] = useState(false)
  const [underline, setUnderline] = useState({
    Projects: true,
    Skills: false,
    Contacts: false
  })

  const getUnderline = ({target}) => {
    localStorage.removeItem('projects')

    for (let key in underline) {
      underline[key] = false
    }

    setUnderline(prev => ({
        ...prev,
        [target.innerText]: true
    }))
  }

  const darkModeToggler = () => {
    setState(!state)
    const isDark = document.body.classList.toggle('dark')
    isDark ? localStorage.setItem('darkMode', 'dark') : localStorage.setItem('darkMode', 'light')
  }

  useEffect(() => {
    if (matchMedia && matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add('dark')
    }
  }, [])

  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <Link className="logo" to="/">
            <strong>My</strong> portfolio
          </Link>
          <button
            className={'dark-mode-btn' + (state ? ' dark-mode-btn__active' : '')}
            onClick={darkModeToggler}
          >
            <img src={sun} alt="sun" className="dark-mode-btn__icon"/>
            <img src={moon} alt="moon" className="dark-mode-btn__icon"/>
          </button>
          <ul className="nav-list">
            <li className="nav-list__item" onClick={getUnderline}>
              <Link
                className={'nav-list__link' + (underline.Projects ? ' nav-list__link_active' : '')}
                to="/"
              >
                Projects
              </Link>
            </li>
            <li className="nav-list__item" onClick={getUnderline}>
              <Link
                className={'nav-list__link' + (underline.Skills ? ' nav-list__link_active' : '')}
                to="/skills"
              >
                Skills
              </Link>
            </li>
            <li className="nav-list__item" onClick={getUnderline}>
              <Link
                className={'nav-list__link' + (underline.Contacts ? ' nav-list__link_active' : '')}
                to="/contacts">
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavBar