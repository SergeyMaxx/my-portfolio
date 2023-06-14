import React from 'react'

const Skills = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Skills</h1>
        <div className="content-list">
          <h2 className="title-2">Frontend </h2>
          <p className="content-list__desc">
            JavaScript, TypeScript, React, Redux, SCSS,<br/>
            Axios, Lodash
          </p>
          <h2 className="title-2">Backend</h2>
          <p className="content-list__desc">
            NodeJS, Express, MongoDB
          </p>
        </div>
      </div>
    </main>
  )
}

export default Skills