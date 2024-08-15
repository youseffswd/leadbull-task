const SectionHeading = ({ children }) => {
    return (
        <h2 className={`text-main text-center font-bold mb-8 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}>
            {children}
        </h2>
    );
};

export default SectionHeading;
