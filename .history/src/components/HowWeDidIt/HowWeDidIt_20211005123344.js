import React from 'react'
import './HowWeDidIt.css'
const HowWeDidIt = page => {
  return (
    <div className={styles.root}>
      {page === '1' && 
        <div className='rootPage1'>
          
        </div>
      }
    </div>
  )
}

export default HowWeDidIt