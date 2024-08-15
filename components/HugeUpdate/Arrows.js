import Image from "next/image";
import portal from "@/public/portal.webp";
const Arrows = () => {
    return (
        <div className="hidden lg:flex flex-col items-center mt-2">
            <svg
                width="18"
                height="151"
                viewBox="0 0 18 151"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M9 0L0.339746 15H17.6603L9 0ZM10.5 151V146.281H7.5L7.5 151H10.5ZM10.5 136.844L10.5 127.406H7.5L7.5 136.844H10.5ZM10.5 117.969L10.5 108.531H7.5L7.5 117.969H10.5ZM10.5 99.0938V89.6562H7.5L7.5 99.0938H10.5ZM10.5 80.2188L10.5 70.7812H7.5L7.5 80.2188H10.5ZM10.5 61.3438L10.5 51.9062H7.5L7.5 61.3438H10.5ZM10.5 42.4688V33.0312H7.5L7.5 42.4688H10.5ZM10.5 23.5938V14.1562H7.5L7.5 23.5938H10.5Z"
                    fill="#5C3B44"
                />
            </svg>
            <Image src={portal} alt="portal" />
            <div className="flex items-end relative">
                <svg
                    width="404"
                    height="83"
                    viewBox="0 0 404 83"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M402 0V81H0"
                        stroke="#5C3B44"
                        stroke-width="3"
                        stroke-dasharray="10 10"
                    />
                </svg>
                <svg
                    width="404"
                    height="4"
                    viewBox="0 0 404 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M402 3V2H0"
                        stroke="#5C3B44"
                        stroke-width="3"
                        stroke-dasharray="10 10"
                    />
                </svg>
                <svg
                    className="absolute left-[-9px] bottom-[-111px]"
                    width="18"
                    height="115"
                    viewBox="0 0 18 115"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.99994 115L17.6602 100H0.339684L8.99994 115ZM7.49994 0V4.79167H10.4999V0H7.49994ZM7.49994 14.375V23.9583H10.4999V14.375H7.49994ZM7.49994 33.5417V43.125H10.4999V33.5417H7.49994ZM7.49994 52.7083V62.2917H10.4999V52.7083H7.49994ZM7.49994 71.875V81.4583H10.4999V71.875H7.49994ZM7.49994 91.0417V100.625H10.4999V91.0417H7.49994Z"
                        fill="#5C3B44"
                    />
                </svg>
                <svg
                    className="absolute right-[-9px] bottom-[-111px]"
                    width="18"
                    height="115"
                    viewBox="0 0 18 115"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.99994 115L17.6602 100H0.339684L8.99994 115ZM7.49994 0V4.79167H10.4999V0H7.49994ZM7.49994 14.375V23.9583H10.4999V14.375H7.49994ZM7.49994 33.5417V43.125H10.4999V33.5417H7.49994ZM7.49994 52.7083V62.2917H10.4999V52.7083H7.49994ZM7.49994 71.875V81.4583H10.4999V71.875H7.49994ZM7.49994 91.0417V100.625H10.4999V91.0417H7.49994Z"
                        fill="#5C3B44"
                    />
                </svg>
            </div>
        </div>
    );
};

export default Arrows;
