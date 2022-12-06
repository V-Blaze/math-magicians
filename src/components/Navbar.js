import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='title-div'>
            <h2 className='title'>Math Magicians</h2>
        </div>
        <div className='menu'>
            <ul className='menu-list'>
                <li className='list-item'>Home</li>
                <li className='list-item'>Calculator</li>
                <li className='list-item'>Quote</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar