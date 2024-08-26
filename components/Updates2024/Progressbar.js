const Progressbar = ({percentage}) => {
    return (
        <div
            class="flex w-full h-1.5 bg-gray-200 rounded-full overflow-hidden dark:bg-neutral-700"
            role="progressbar"
            aria-valuenow={percentage}
            aria-valuemin="0"
            aria-valuemax="100"
        >
            <div
                class="flex flex-col justify-center rounded-full overflow-hidden bg-main text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500"
                style={{width: `${percentage}%`}}
            ></div>
        </div>
    );
};

export default Progressbar;
