import React from 'react'

const Show = ({className, link, label, classIcon, icon}) => {
  return (
    <div className={className}>
        <a href={link}>{label}</a>
    <img className={classIcon} src={icon} alt="Arrow" />
</div >
  )
}

export default Show