import React from 'react'
import {useParams} from 'react-router-dom'
import ProjectPage from './pages/projectPage'
import ProjectsList from './pages/projectsList'

const Project = () => {
  const params = useParams()
  const {projectId} = params

  return projectId ? <ProjectPage/> : <ProjectsList/>
}

export default Project