import React, {Component} from 'react'

class ItemListContainer extends Component {
  render(){
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '10vh'
        }}>
        <h1>Página aún en construcción pero por ahora {this.props.greeting}</h1>
    </div>
  )
}
}
export default ItemListContainer