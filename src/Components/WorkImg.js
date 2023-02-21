import React from 'react'
import trabajando from './working.png'; 

const WorkImg = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }}>
        <img src={trabajando} alt="trabajando" class="center" height={200} width={170}/> 
    </div>
  )
}

export default WorkImg;