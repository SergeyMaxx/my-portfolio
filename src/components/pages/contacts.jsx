import React from 'react'

const Contacts = () => {
  return (
    <main className="section">
      <div className="container">
        <h1 className="title-1">Contacts</h1>
        <div className="content-list">
          <h2 className="title-2">Location</h2>
          <p className="content-list__desc">
            Moscow, Russia
          </p>
          <h2 className="title-2">Telegram / WhatsApp</h2>
          <a className="content-list__desc" href="https://t.me/Sergeymaxx" target="_blank">@Sergeymaxx </a>
          <span className="content-list__desc" >
            / +7 (962) 971-03-40
          </span>
          <h2 className="title-2">Email</h2>
          <span className="content-list__desc content-list__link">
            maximov.regen@gmail.com
          </span>
        </div>
      </div>
    </main>
  )
}

export default Contacts