import React from 'react'
import vk from '../icons/vk.svg'
import instagram from '../icons/instagram.svg'
import twitter from '../icons/twitter.svg'
import gitHub from '../icons/gitHub.svg'
import linkedIn from '../icons/linkedIn.svg'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <ul className="social">
          <li className="social__item">
            <a href="https://vk.com" target='_blank' rel='noreferrer'>
              <img src={vk} alt="link"/>
            </a>
          </li>
          <li className="social__item">
            <a href="https://instagram.com" target='_blank' rel='noreferrer'>
              <img src={instagram} alt="link"/>
            </a>
          </li>
          <li className="social__item">
            <a href="https://twitter.com" target='_blank' rel='noreferrer'>
              <img src={twitter} alt="link"/>
            </a>
          </li>
          <li className="social__item">
            <a href="https://github.com/SergeyMaxx" target='_blank' rel='noreferrer'>
              <img src={gitHub} alt="link"/>
            </a>
          </li>
          <li className="social__item">
            <a href="https://linkedIn.com" target='_blank' rel='noreferrer'>
              <img src={linkedIn} alt="link"/>
            </a>
          </li>
        </ul>
        <p className="copyright">
          © 2023 my-portfolio.com
        </p>
      </div>
    </footer>
  )
}

export default Footer