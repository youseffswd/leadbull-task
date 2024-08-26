const Cell = ({number,type}) => {
    return (
        <div className="flex flex-col flex-1 basis-1/2 justify-between text-center lg:w-56 lg:basis-0 h-[4.5rem] border-r border-r-main lg:px-3 even:border-r-0 lg:even:border-r lg:last:border-r-0">
            <span className="font-semibold text-3xl">{number}</span>
            <span className="font-light">
               {type}
            </span>
        </div>
    );
};

export default Cell;
