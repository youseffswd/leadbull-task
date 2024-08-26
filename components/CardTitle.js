

const CardTitle = ({children,className}) => {
  return (
    <h3 className={`${className} text-xl md:text-2xl xl:text-3xl font-bold  mb-3`}>{children}</h3>
  )
}

export default CardTitle