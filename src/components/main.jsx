import React from 'react'
import {useHistory} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {getProjects} from '../Store/createStore'

const Main = () => {
  const projects = useSelector(getProjects())
  const history = useHistory()

  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects-list">
          {projects.map(p => (
            <li
              className='project'
              onClick={() => history.push(`/${p.id}`)}
              key={p.id}
            >
              <img src={p.img} alt='project'/>
              <h3 className="project__title">{p.title}</h3>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}

export default Main