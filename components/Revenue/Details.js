import Cell from "./Cell";

const Details = () => {
    return (
        <div className="w-full shadow-[inset_0_0px_4px_0_midnightblue] lg:w-fit flex-wrap gap-y-8 mx-auto mt-16 py-5 px-10 rounded-xl flex items-center relative bg-gradient-to-l from-main to-secondary">
            <Cell number="75+" type="Independent Member Firms" />
            <Cell number="35+" type="Contracting LLCs" />
            <Cell number="75+" type="Affiliate Network" />
            <Cell number="75+" type="Countries" />
            <div className="absolute w-[calc(100%+10px)] h-4/5 left-[-5px] rounded-2xl bg-main z-[-1]" />
        </div>
    );
};

export default Details;
