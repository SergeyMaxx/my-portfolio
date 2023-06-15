import React, {useEffect, useState} from 'react'
import sun from '../icons/sun.svg'
import moon from '../icons/moon.svg'
import {Link} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {darkModeToggle, getDarkMode} from '../Store/createStore'

const NavBar = () => {
  const dispatch = useDispatch()
  const darkMode = useSelector(getDarkMode())
  const [state, setState] = useState(localStorage.getItem('darkMode') === 'dark')
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
    !state
      ? localStorage.setItem('darkMode', 'dark')
      : localStorage.setItem('darkMode', 'light')

    dispatch(darkModeToggle({status: localStorage.getItem('darkMode')}))
    setState(!state)
  }

  useEffect(() => {
    darkMode === 'dark'
      ? document.body.classList.add('dark')
      : document.body.classList.remove('dark')
  }, [darkMode])

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