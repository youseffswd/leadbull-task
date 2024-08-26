

const SectionSubHeading = ({children,className}) => {
  return (
    <p className={`text-base md:text-lg lg:text-xl text-gray-300 ${className}`}>
        {children}
    </p>
  )
}

export default SectionSubHeading