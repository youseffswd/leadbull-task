import React from 'react'

const CardDescription = ({className,children}) => {
  return (
    <p className={`${className} text-lg lg:text-xl  leading-relaxed`}>
        {children}
    </p>
  )
}

export default CardDescription