
import CardTitle from '../CardTitle'
import CardDescription from '../CardDescription'

const Box = ({title,description,className}) => {
  return (
    <div className={`${className} text-center border lg:max-w-80 p-3 border-main rounded-xl bg-gradient-to-t from-main/40 to-secondary/40`}>
      <CardTitle>{title}</CardTitle>
      <CardDescription className={"mt-5 text-gray-400"}>{description}</CardDescription>
    </div>
  )
}

export default Box