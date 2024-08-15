import CardDescription from "../CardDescription"
import CardTitle from "../CardTitle"


const Information = ({h3,p,className}) => {
  return (
    <div className={`${className} lg:w-fit mx-auto text-center p-3 md:p-5 lg:p-3 xl:p-8 bg-[rgba(255,255,255,.1)] mt-10 rounded-2xl`}>
        <CardTitle className={"text-main"}>{h3}</CardTitle>
        <CardDescription className="text-gray-300 max-w-96 lg:max-w-56 lg:min-h-72 xl:max-w-96 xl:min-h-44 mx-auto">{p}</CardDescription>
    </div>
  )
}

export default Information