import React from 'react';
import '../../index.css';
import FaqSection from '../../components/Faq';
import SubSection from '../../components/SubSection';
import PlatinumSubscriptionPlans from '../../components/subscriptions/PlatinumSubscription';

const PlatinumPlan = () => {
    return (
        <div className="container mx-auto text-primary relative">
            <div className='relative'>
                <div className="grid md:grid-cols-2 relative z-30">
                    <div className="col-span-2 md:col-span-1 mt-[50px] md:mt-[100px] order-2 md:order-1">
                        <p className="font-[russo] text-3xl md:text-5xl lg:text-[60px] leading-tight mb-1">
                            Platinum
                        </p>
                        <p className="font-[russo] text-3xl md:text-5xl lg:text-[60px] leading-tight mb-1">
                            Plan
                        </p>

                        <img className="mt-[30px] md:mt-[120px] relative z-[21]" src="/assets/images/header_flow.png" alt="Header Flow" />
                    </div>

                    <div className="col-span-2 md:col-span-1 flex justify-center items-center relative mt-10 md:mt-0 overflow-hidden order-1 md:order-2">
                        <img className="z-30 w-[350px] md:w-full" src="/assets/images/phone_platinum.png" alt="Phone group 1" />
                    </div>
                </div>

                <span className="absolute translate-y-[35%] md:translate-y-[0%] inset-0 flex justify-center items-center font-[russo] opacity-[20%] z-10 pointer-events-none whitespace-nowrap text-[80px] sm:text-[80px] md:text-[150px] lg:text-[200px] xl:text-[250px]">
                    S-TALKER
                </span>
            </div>

            {
                subSections?.length ? <>
                    {
                        subSections.map((subSection, index) => {
                            return (
                                <SubSection subSection={subSection} key={index} order={index} />
                            )
                        })
                    }
                </> : ''
            }

            <PlatinumSubscriptionPlans />

            <FaqSection />

        </div>
    );
};

const subSections = [
    {
        title: 'Secure Messaging',
        imageUrl: '/assets/images/connection.png',
        description: 'End-to-end encrypted and no phone number required. No ads, no data mining.With Stalker, your conversations are fully protected by end-to-end encryption. No intermediary, server, or third party can access your messages. Additionally, you don’t need to provide a phone number to use the app, keeping your personal information private. Stalker is free from ads and does not engage in data mining. Your data belongs solely to you and remains under your complete control.'
    },
    {
        title: 'Bulletproof Server',
        imageUrl: '/assets/images/in_control.png',
        description: 'With Stalker, all your conversations are safeguarded with end-to-end encryption, ensuring that only you and the person you’re messaging can access them. This means that even the app providers cannot see or read your messages. Our advanced encryption technology prioritizes your privacy, keeping your conversations fully under your control. Experience complete security and independence with Stalker.'
    },
    {
        title: 'GrapheneOS + S-TALKER Installed Pixel 9 XL',
        imageUrl: '/assets/images/os_system.png',
        description: 'By integrating with GrapheneOS, we provide an extra layer of security and ensure that your privacy remains at the highest level with security features specially configured for Android users. Gold Subscription includes GrapheneOS supported phone purchase consultancy, GrapheneOS Installation support, Stalker Installation support, as well as training on GrapheneOS extra security measure configurations.'
    },
    {
        title: 'Crypto Payment',
        imageUrl: '/assets/images/crypto_payment.png',
        description: 'With Stalker, all your conversations are safeguarded with end-to-end encryption, ensuring that only you and the person you’re messaging can access them. This means that even the app providers cannot see or read your messages. Our advanced encryption technology prioritizes your privacy, keeping your conversations fully under your control. Experience complete security and independence with Stalker.'
    },
];

export default PlatinumPlan;
