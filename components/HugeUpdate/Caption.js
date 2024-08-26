import SectionHeading from "../SectionHeading";

const Caption = () => {
    return (
        <div className="caption">
            <SectionHeading>Huge Updates On-The-Way </SectionHeading>
            <ul className="text-base md:text-lg lg:text-xl text-gray-300 flex flex-col gap-4 lg:items-center">
                <li className="relative after:content-[''] after:absolute after:w-2 after:h-2 after:rounded-full after:bg-gray-300 after:top-[50%] after:translate-y-[-50%] after:left-0 w-fit pl-4">
                    Expanding in existing markets: Canada, UK, and US and
                    promoting our upgraded leads services there
                </li>
                <li className="relative after:content-[''] after:absolute after:w-2 after:h-2 after:rounded-full after:bg-white after:top-[50%] after:translate-y-[-50%] after:left-0 w-fit pl-4">
                    Entering new targeted markets: UAE
                </li>
            </ul>
        </div>
    );
};

export default Caption;
