import Progressbar from "./Progressbar"


const LabeledProgress = ({percentage,title,desc}) => {
  return (
    <div className="mb-5 last:mb-0">
      <h4 className="text-main text-xl">{title}</h4>
      <p className="text-gray-300 font-light mb-2">{desc}</p>
      <Progressbar percentage={percentage} />
    </div>
  )
}

export default LabeledProgress