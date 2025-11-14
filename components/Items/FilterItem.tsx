import React from 'react'

const FilterItem = () => {
  return (
    <div className='flex gap-3'>
        <button className="btn">All</button>
        <button className="btn">Completed</button>
    </div>
  )
}

export default FilterItem