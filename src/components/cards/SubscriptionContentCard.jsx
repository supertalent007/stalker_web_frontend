import React from "react";
import { Link } from "react-router-dom";

const SubscriptionContentCard = ({ subscriptionData, customClass }) => {
    return (
        <div className={"col-span-1 py-5 flex flex-col text-black rounded-[20px] max-w-[450px] " + (customClass ? customClass : '')}>
            <div className="py-[30px] bg-black text-primary rounded-[20px]">
                <h3 className="text-[29px] leading-[35px] tracking-[0%] font-[russo] mb-5">{subscriptionData?.name}</h3>

                <p className="mb-8 text-[14px]">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>

                <ul className="flex flex-wrap gap-4">
                    <li>
                        <Link to="#">
                            <img
                                src="/assets/buttons/google.png"
                                alt="android app"
                                className="transform transition-transform duration-300 hover:scale-110"
                            />
                        </Link>
                    </li>
                    <li>
                        <Link to="#">
                            <img
                                src="/assets/buttons/apple.png"
                                alt="ios app"
                                className="transform transition-transform duration-300 hover:scale-110"
                            />
                        </Link>
                    </li>
                </ul>

                <Link
                    to={subscriptionData?.link}
                    className="group mt-4 gap-4 flex justify-start items-center text-[50px] rounded-[5px] py-2 mb-0 transition-colors duration-300"
                >
                    View Details
                    <svg
                        className="mt-[15px] w-6 h-6 transition-transform duration-300 group-hover:animate-bounce-horizontal"
                        width="25"
                        height="21"
                        viewBox="0 0 25 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M23.665 11.5094C24.333 10.8405 24.333 9.75439 23.665 9.08545L15.105 0.525391C14.436 -0.142578 13.3501 -0.142578 12.6812 0.525391C12.0122 1.19446 12.0122 2.2804 12.6812 2.94946L18.3252 8.58838H1.91113C0.963867 8.58838 0.199219 9.35339 0.199219 10.3004C0.199219 11.2474 0.964844 12.0125 1.91113 12.0125H18.3198L12.686 17.6515C12.0171 18.3204 12.0171 19.4065 12.686 20.0754C13.355 20.7434 14.4409 20.7434 15.1099 20.0754L23.6699 11.5154L23.665 11.5094Z"
                            fill="white"
                        />
                    </svg>
                </Link>

                <style>
                    {`
                    @keyframes bounce-horizontal {
                        0%, 100% {
                            transform: translateX(0);
                        }
                        50% {
                            transform: translateX(8px);
                        }
                    }
                    .group:hover .group-hover\\:animate-bounce-horizontal {
                        animation: bounce-horizontal 1s ease-in-out infinite;
                    }
                `}
                </style>

            </div>
        </div>
    )
}

export default SubscriptionContentCard;