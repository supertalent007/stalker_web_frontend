import React, { useState, useEffect } from 'react';
import '../index.css';
import FaqSection from '../components/Faq';
import SubscriptionPlanCard from '../components/cards/SubscriptionPlanCard';
import SubscriptionContentCard from '../components/cards/SubscriptionContentCard';
import { getSubscriptionPlan } from '../utils/Constants';

const Pricing = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [subscriptions, setSubscriptions] = useState([]);

    const checkMobileScreen = () => {
        if (window.innerWidth <= 768) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    };

    useEffect(() => {
        checkMobileScreen();

        const filters = [
            { membership: "standard", plan: 1 },
            { membership: "gold", plan: 1 },
            { membership: "platinum", plan: 1 },
        ];

        setSubscriptions(getSubscriptionPlan(filters));

        document.addEventListener("mousedown", checkMobileScreen);

        return () => {
            document.removeEventListener("mousedown", checkMobileScreen);
        };
    }, []);

    return (
        <div className="container mx-auto text-primary relative">
            <div className='relative'>
                <div className="grid md:grid-cols-2 relative z-30">
                    <div className="col-span-2 md:col-span-1 mt-[50px] order-2 md:order-1">
                        <p className="font-[russo] text-3xl md:text-5xl lg:text-[60px] leading-tight mb-6">
                            Take a look subscription plans
                        </p>

                        <button className="relative mt-10 px-5 py-3 rounded-xl bg-gray-100 text-black hover:bg-secondary text-sm md:text-base z-[21]">
                            Get Started
                        </button>
                        <img className="mt-[30px] md:mt-[120px] relative z-[21]" src="/assets/images/header_flow.png" alt="Header Flow" />
                    </div>

                    <div className="col-span-2 md:col-span-1 flex justify-center items-center relative mt-10 md:mt-0 overflow-hidden order-1 md:order-2">
                        <img className="z-30 w-[350px] md:w-full" src="/assets/images/phone_pricing.png" alt="Phone Pricing" />
                    </div>
                </div>

                <span className="absolute translate-y-[35%] md:translate-y-[0%] inset-0 flex justify-center items-center font-[russo] opacity-[20%] z-10 pointer-events-none whitespace-nowrap text-[80px] sm:text-[80px] md:text-[150px] lg:text-[200px] xl:text-[250px]">
                    S-TALKER
                </span>
            </div>

            <div class="flex flex-col md:grid md:grid-cols-7 mx-auto mt-[100px] p-2 text-blue-50 md:px-[50px] sm:px-[15px] gap-y-[50px]">
                {
                    subscriptions.map((subscription, index) => {
                        return (
                            <div class="flex flex-wrap items-center justify-center md:justify-between md:contents">
                                <div className='col-span-7 md:col-span-3 gird grid-cols-1'>
                                    {
                                        index % 2 && !isMobile ?
                                            <SubscriptionContentCard subscriptionData={subscription} key={`subscription_${index}`} customClass={(index % 2 ? 'ml-auto' : 'mr-auto')} /> :
                                            <SubscriptionPlanCard subscriptionData={subscription} key={`subscription_${index}`} customClass={(index % 2 ? 'mr-auto' : 'ml-auto')} buttonName='View Details' />
                                    }
                                </div>
                                <div class="col-span-1 md:mx-auto relative md:flex justify-center my-[-25px] hidden">
                                    <div class="h-full w-6 flex items-center justify-center">
                                        <div class="h-full w-1 bg-[#444251] pointer-events-none"></div>
                                    </div>
                                    <div class="w-[42px] h-[42px] absolute top-1/2 -mt-3 rounded-full bg-white shadow flex justify-center items-center">
                                        <div class="w-[13px] h-[13px] rounded-full bg-black shadow">
                                        </div>
                                    </div>
                                </div>
                                <div className='col-span-7 md:col-span-3 gird grid-cols-1'>
                                    {
                                        index % 2 && !isMobile ?
                                            <SubscriptionPlanCard subscriptionData={subscription} key={`subscription_${index}`} customClass={(index % 2 ? 'mr-auto' : 'ml-auto')} buttonName='View Details' /> :
                                            <SubscriptionContentCard subscriptionData={subscription} key={`subscription_${index}`} customClass={(index % 2 ? 'ml-auto' : 'mr-auto')} />
                                    }
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            <FaqSection />

        </div>
    );
};


export default Pricing;
