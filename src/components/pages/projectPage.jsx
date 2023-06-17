import React, {useEffect, useState} from 'react'
import gitHubBlack from '../../icons/gitHub-black.svg'
import gitHub from '../../icons/gitHub.svg'
import {useSelector} from 'react-redux'
import {getDarkMode, getProjects} from '../../Store/createStore'
import {useParams} from 'react-router-dom'

const ProjectPage = () => {
  const projects = useSelector(getProjects())
  const darkMode = useSelector(getDarkMode())
  const {projectId} = useParams()

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(getById))
  }, [projects])

  const getById = projects.find(p => p.id === projectId) ||
    JSON.parse(localStorage.getItem('projects'))

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{getById.title}</h1>
          <a href={getById.projectLink} target='_blank'>
            <img className="project-details__img" src={getById.imgBig} alt="project-img"/>
          </a>
          <p className="project-details__desc">
            {getById.description}
          </p>
          <a
            className="btn-outline"
            href={getById.gitHubLink}
            target="_blank"
            rel="noreferrer"
          >
            {darkMode === 'dark'
              ? <img className="git " src={gitHub} alt="gitHub"/>
              : <img className="git-black " src={gitHubBlack} alt="gitHub"/>
            }
            GitHub repo
          </a>
        </div>
      </div>
    </main>
  )
}

export default ProjectPage