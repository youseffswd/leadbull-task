import React from 'react'

const CardDescription = ({className,children}) => {
  return (
    <p className={`${className} text-lg  leading-relaxed`}>
        {children}
    </p>
  )
}

export default CardDescription