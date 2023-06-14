import React from 'react'
import gitHubBlack from '../../icons/gitHub-black.svg'
import gitHub from '../../icons/gitHub.svg'
import {useSelector} from 'react-redux'
import {getProjects} from '../../Store/createStore'
import {useParams} from 'react-router-dom'

const ProjectPage = () => {
  const projects = useSelector(getProjects())
  const {projectId} = useParams()

  const getById = projects.find(p => p.id === projectId)

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{getById.title}</h1>
          <img className="project-details__img" src={getById.img} alt="project-img"/>
          <p className="project-details__desc">
            Skills: React, Redux, Node.js, MongoDB
          </p>
          <a
            className="btn-outline"
            href="https://github.com/SergeyMaxx"
            target='_blank'
            rel='noreferrer'
          >
            <img className="git-black" src={gitHubBlack} alt="gitHub"/>
            <img className="git none" src={gitHub} alt="gitHub"/>
            GitHub repo
          </a>
        </div>
      </div>
    </main>
  )
}

export default ProjectPage