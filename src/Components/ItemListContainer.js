import React from 'react'
import trabajando from './working.png'; 

const ItemListContainer = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
    }}>
        <h1> Bienvenido, página aún en construcción</h1>
        <img src={trabajando} alt="trabajando" class="center" height={200} width={170}/> 
    </div>
  )
}

export default ItemListContainer;