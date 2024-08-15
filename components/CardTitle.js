

const CardTitle = ({children,className}) => {
  return (
    <h3 className={`${className} text-2xl md:text-3xl xl:text-4xl font-bold  mb-3`}>{children}</h3>
  )
}

export default CardTitle