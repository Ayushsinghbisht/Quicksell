import React from 'react'
import "./Card.css"


export const Card = () => {
  return (
    <div className='card'>
      <div className='top-container'>
        <div className='ticket-id'>ticket.id</div>
        {/* {hideProfileIcon ? null : <UserIcon name={userData.name} available={userData.available} />} */}
      </div>
      <div className='middle-container'>
        {/* {hideStatusIcon ? null : getStatusIcon(ticket.status)} */}
        <div className='title'>ticket.title</div>
      </div>
      <div className='bottom-container'>
        <div className='more-icon-container'>
          {/* <LuMoreHorizontal color="#797d84" /> */}
        </div>
        {/* {ticket.tag.map((t: string) => (
          <div key={t} className='tag-container'>
            <div className='tag-icon'></div>
            <div className='tag-text'>{t}</div>
          </div>
        ))} */}
      </div>
    </div>
  )
}
