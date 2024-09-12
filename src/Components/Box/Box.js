import React from 'react'
import "./Box.css"

export const Box = () => {
  return (
    <div className='box' >
        {/* ref={componentRef} */}
    <div className='box-container'>
        {/*  onClick={openDropdown} */}
      {/* <LuSettings2 color='#6b6f76' /> */}
      <div className='box-label'>Display</div>
      {/* <BiChevronDown color='#6b6f76' /> */}
    </div>
    <div className={`box-content-container  `}>
        {/* ${visible && "visible"} */}
      <div className='box-content-row'>
        <div className='box-content-label'>Grouping</div>
        <select name="grouping" id="grouping" >
            {/* value={grouping} onChange={onGroupingChange} */}
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div className='box-content-row'>
        <div className='box-content-label'>Ordering</div>
        <select name="ordering" id="ordering" >
            {/* value={ordering} onChange={onOrderingChange} */}
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  </div>
  )
}
