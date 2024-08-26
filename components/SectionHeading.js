const SectionHeading = ({ children,className }) => {
    return (
        <h2 className={`${className} text-main text-center font-bold mb-8 text-3xl md:text-4xl lg:text-5xl`}>
            {children}
        </h2>
    );
};

export default SectionHeading;
