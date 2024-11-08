import React from "react";
import { Link } from "react-router-dom";

const SubscriptionPlanCard = ({ subscriptionData, customClass, buttonName, setStep, setSubscription, appType }) => {
    const getLink = (buttonName) => {
        if (buttonName) {
            if (buttonName === 'Subscribe') {
                return '#';
            }
            if (buttonName === 'View Details') {
                return `/membership/${subscriptionData?.membership}`;
            }
        }
    }

    const handleLink = () => {
        if (buttonName) {
            if (buttonName === 'Subscribe') {
                setStep(3);
                setSubscription(subscriptionData);
            }
        }
    }

    return (
        <div className={"col-span-1 p-5 flex flex-col bg-[#222] text-black rounded-[20px] max-w-[450px] " + (customClass ? customClass : '')}>
            <div className="p-[30px] bg-black text-primary rounded-[20px]">
                <h3 className="text-[29px] leading-[35px] tracking-[0%] font-[russo] mb-5">{subscriptionData?.name}</h3>

                <div className="flex items-center">
                    <div className="flex flex-col">
                        <p>${subscriptionData?.price}</p>
                        <p className="text-[#6B7280]">/{subscriptionData?.duration}</p>
                    </div>
                    {
                        subscriptionData?.promotion ?
                            <span className="text-[#6B7280] text-[15px] font-[russo] leading-[18px] mr-0 ml-auto">Save {subscriptionData?.promotion}$</span> : ''
                    }
                </div>
            </div>

            <div className="mx-[25px] mt-3 text-primary flex flex-col h-full">
                <p className="mb-4">{subscriptionData?.description}</p>

                <ul className="flex flex-col gap-3 mb-5">
                    {
                        subscriptionData?.services?.map((service, index) => {
                            return (
                                <li className="flex gap-3 items-center" key={`subscription_service_${index}`}>
                                    <span className='transform transition-transform'>
                                        {service?.icon}
                                    </span>
                                    <p className="text-[#999]">
                                        {service?.name}
                                    </p>
                                </li>
                            )
                        })
                    }
                </ul>
                {
                    buttonName && !appType ?
                        <Link
                            to={getLink(buttonName)}
                            className="flex justify-center border rounded-[5px] py-2 mt-auto mb-0 hover:bg-primary hover:text-black transition-colors duration-300"
                            onClick={handleLink}
                        >
                            {buttonName}
                        </Link> : ''
                }
                {
                    appType ?
                        <div className='px-[40px] py-[15px] bg-[#111] rounded-[15px] flex justify-center'>
                            {
                                appType === 'android' && <img src="/assets/buttons/android.png" alt="android app" />
                            }
                            {
                                appType === 'ios' && <img src="/assets/buttons/ios.png" alt="ios app" />
                            }
                        </div> : ""
                }
            </div>
        </div>
    )
}

export default SubscriptionPlanCard;