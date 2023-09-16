import React from 'react'
import CoffeTienda from './tienda/CoffeTienda';

const Show = ({className, link, label, classIcon, icon}) => {

    
  return (
    <div className={className}>
        <a href="#" >{label}</a>
    <img className={classIcon} src={icon} alt="Arrow" />
</div >
  )
}

export default Show