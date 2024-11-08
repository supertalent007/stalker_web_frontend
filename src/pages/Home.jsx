import React from 'react';
import '../index.css';
import FaqSection from '../components/Faq';
import SubscriptionPlans from '../components/subscriptions/Subscription';
import SubSection from '../components/SubSection';

const Home = () => {
    return (
        <div className="container mx-auto text-primary relative">
            <div className='relative'>
                <div className="grid md:grid-cols-2 relative z-30">
                    <div className="col-span-2 md:col-span-1 mt-[50px] order-2 md:order-1">
                        <p className="font-[russo] text-3xl md:text-5xl lg:text-[60px] leading-tight">
                            Welcome to Stalker:
                        </p>
                        <p className="font-[russo] text-3xl md:text-5xl lg:text-[60px] leading-tight">
                            Your Secure
                        </p>
                        <p className="font-[russo] text-3xl md:text-5xl lg:text-[60px] leading-tight mb-6">
                            Messaging Solution
                        </p>
                        <p className="font-inter text-sm md:text-base text-secondary z-[21] relative">
                            Meet Stalker, the most reliable way to protect your privacy in the digital world.
                            Protect your personal and professional communications with three different security packages.
                        </p>
                        <button className="relative mt-10 px-5 py-3 rounded-xl bg-gray-100 text-black hover:bg-secondary text-sm md:text-base z-[21]">
                            Get Started
                        </button>
                        <img className="mt-[30px] md:mt-[120px] relative z-[21]" src="/assets/images/header_flow.png" alt="Header Flow" />
                    </div>

                    <div className="col-span-2 md:col-span-1 flex justify-center items-center relative mt-10 md:mt-0 overflow-hidden order-1 md:order-2">
                        <img className="z-30 w-[350px] md:w-full" src="/assets/images/phone1.png" alt="Phone 1" />
                        <img className="ml-[-300px] md:ml-[-400px] z-[19] w-[350px] md:w-full" src="/assets/images/phone2.png" alt="Phone 2" />
                        <img className="ml-[-300px] md:ml-[-400px] z-10 w-[350px] md:w-full" src="/assets/images/phone3.png" alt="Phone 3" />
                    </div>
                    <div className="absolute z-20 w-full mt-[280px]">
                        <img className="w-full" src="/assets/images/bg-effect.png" alt="Background Effect" />
                    </div>
                </div>

                <span className="absolute translate-y-[20%] md:translate-y-[0%] inset-0 flex justify-center items-center font-[russo] opacity-[20%] z-10 pointer-events-none whitespace-nowrap text-[80px] sm:text-[80px] md:text-[150px] lg:text-[200px] xl:text-[250px]">
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

            <div className='flex flex-col items-center gap-[60px] mt-[50px]'>
                <h2 className='text-[30px] sm:text-[35px] md:text-[40px] font-[russo]'>
                    Bulletproof Server
                </h2>
                <video className='w-full max-w-[1000px] sm:w-[80vw] md:w-[75vw] lg:w-[70vw] rounded-[20px]' src="/assets/videos/intro.mp4" controls />
            </div>

            <SubscriptionPlans />

            <FaqSection />

        </div>
    );
};

const subSections = [
    {
        title: 'About Us',
        imageUrl: '/assets/images/connection.png',
        subTitle: 'Join the Secure Messaging Revolution',
        lists: [
            {
                list_title: 'Stalker offers cutting-edge encryption and privacy features to keep your conversations safe from prying eyes.',
                list_items: [
                    {
                        icon: <svg width="15" height="17" viewBox="0 0 15 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.15698 6.34204V4.84302C3.15698 2.36096 5.17102 0.347046 7.65399 0.347046C10.136 0.347046 12.15 2.36096 12.15 4.84302V6.34204H12.65C13.752 6.34204 14.648 7.23804 14.648 8.33997V14.335C14.648 15.437 13.752 16.334 12.65 16.334H2.65802C1.55603 16.334 0.658997 15.437 0.658997 14.335V8.33997C0.658997 7.23804 1.55603 6.34204 2.65802 6.34204H3.15698ZM5.15601 4.84302V6.34204H10.152V4.84302C10.152 3.46301 9.034 2.34497 7.65399 2.34497C6.27399 2.34497 5.15601 3.46301 5.15601 4.84302Z" fill="white" />
                        </svg>,
                        item_title: 'Encrypted Messaging',
                        item_description: 'Ensure your communications are private and secure with state-of-the-art encryption.'
                    },
                    {
                        icon: <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.65303 3.01599V14.819C11.962 12.733 13.12 8.11499 13.149 5.34497L7.65303 3.01599ZM7.65303 0.930054C7.79701 0.930054 7.94002 0.962036 8.071 1.021L13.951 3.51599C14.638 3.80603 15.15 4.48401 15.147 5.302C15.131 8.39905 13.857 14.067 8.477 16.6429C7.95601 16.892 7.34999 16.892 6.82899 16.6429C1.44899 14.067 0.175001 8.39905 0.15901 5.302C0.156019 4.48401 0.668043 3.80603 1.35499 3.51599L7.23799 1.021C7.36604 0.962036 7.50899 0.930054 7.65303 0.930054Z" fill="white" />
                        </svg>,
                        item_title: 'GrapheneOS Integration',
                        item_description: 'Experience enhanced privacy with seamless integration of GrapheneOS.'
                    },
                    {
                        icon: <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.65503 14.5031C8.409 14.5031 10.046 14.209 11.279 13.694C11.788 13.481 12.263 13.219 12.65 12.8979V14.0031C12.65 15.3831 9.96399 16.501 6.65503 16.501C3.34497 16.501 0.658997 15.3831 0.658997 14.0031V12.8979C1.04999 13.219 1.521 13.481 2.03003 13.694C3.26398 14.209 4.90002 14.5031 6.65503 14.5031ZM13.649 11.006V10.006V9.198C14.242 9.06604 14.789 8.901 15.276 8.698C15.785 8.48596 16.259 8.22302 16.647 7.90198V9.00696C16.647 9.33496 16.49 9.66296 16.181 9.97205C15.672 10.481 14.776 10.899 13.643 11.171C13.646 11.118 13.649 11.062 13.649 11.006ZM12.65 11.006C12.65 11.568 12.203 12.0861 11.451 12.504C11.394 12.536 11.338 12.564 11.279 12.595C10.18 13.151 8.51599 13.504 6.65503 13.504C4.69397 13.504 2.95099 13.11 1.85797 12.504C1.10602 12.0861 0.658997 11.568 0.658997 11.006V9.90002C1.04999 10.222 1.521 10.484 2.03003 10.696C3.26398 11.212 4.90002 11.505 6.65503 11.505C8.409 11.505 10.046 11.212 11.279 10.696C11.522 10.5959 11.757 10.481 11.978 10.356C12.169 10.25 12.347 10.131 12.515 10.006C12.562 9.97205 12.606 9.93506 12.65 9.90002V10.006V10.184V11.006ZM13.649 8.00806C13.649 7.32397 13.318 6.76196 12.896 6.33997C13.78 6.203 14.589 5.98499 15.276 5.69995C15.785 5.48804 16.259 5.22595 16.646 4.90405V6.01001C16.646 6.61206 16.131 7.16797 15.279 7.599C14.823 7.82996 14.267 8.02698 13.643 8.177C13.646 8.12 13.649 8.06702 13.649 8.01099V8.00806ZM5.677 5.54395C5.99597 5.52197 6.323 5.51001 6.65503 5.51001C8.59698 5.51001 10.32 5.89404 11.416 6.48999C12.191 6.91199 12.65 7.43604 12.65 8.00806C12.65 8.13306 12.628 8.255 12.584 8.37305C12.44 8.78503 12.053 9.16296 11.491 9.48206L11.479 9.48804C11.469 9.49402 11.46 9.49695 11.451 9.50403C10.358 10.109 8.61499 10.5031 6.65503 10.5031C4.79303 10.5031 3.12903 10.15 2.02698 9.59399C1.96802 9.56604 1.91199 9.53503 1.85498 9.50403C1.10602 9.08801 0.658997 8.56995 0.658997 8.00806C0.658997 6.92102 2.32703 5.99402 4.65601 5.65405C4.98401 5.60706 5.32397 5.56897 5.677 5.54395ZM16.647 3.01196C16.647 3.57397 16.2 4.09204 15.447 4.51099C14.539 5.01294 13.184 5.37 11.629 5.47595C11.513 5.41895 11.397 5.36597 11.276 5.31897C10.046 4.80396 8.409 4.51099 6.65503 4.51099C6.39502 4.51099 6.14203 4.51697 5.89001 4.52905L5.85498 4.51099C5.10303 4.09204 4.65601 3.57397 4.65601 3.01196C4.65601 1.63196 7.34198 0.514038 10.651 0.514038C13.961 0.514038 16.647 1.63196 16.647 3.01196Z" fill="white" />
                        </svg>,
                        item_title: 'Crypto Payments',
                        item_description: 'Make anonymous payments using our secure crypto subscription packages.'
                    },
                ]
            }
        ]
    },
    {
        title: 'You’re In Control',
        imageUrl: '/assets/images/in_control.png',
        subTitle: 'Your conversations are protected with end-to-end encryption, accessible only to you. Connect with Stalker for complete security and independence.',
        description: 'With Stalker, all your conversations are safeguarded with end-to-end encryption, ensuring that only you and the person you’re messaging can access them. This means that even the app providers cannot see or read your messages. Our advanced encryption technology prioritizes your privacy, keeping your conversations fully under your control. Experience complete security and independence with Stalker.'
    },
    {
        title: 'Secure Messaging',
        imageUrl: '/assets/images/secure_message.png',
        subTitle: 'End-to-end encrypted and no phone number required. No ads, no data mining',
        description: 'With Stalker, your conversations are fully protected by end-to-end encryption. No intermediary, server, or third party can access your messages. Additionally, you don’t need to provide a phone number to use the app, keeping your personal information private. Stalker is free from ads and does not engage in data mining. Your data belongs solely to you and remains under your complete control.'
    },
    {
        title: 'Own Your Conversation',
        imageUrl: '/assets/images/own_message.png',
        subTitle: 'Secure and independent communication with the same level of privacy as a face-to-face conversation in your own home.',
        description: "Stalker provides the highest level of privacy, protecting your communication in a way that only you can access. Just like a face-to-face conversation within the privacy of your own home, your messages remain visible only to you and the person you're communicating with.No intermediary or third party can interfere with this connection.Stalker redefines secure and independent communication, allowing you to feel safe and private.We offer a communication experience that’s fully under your control in an environment you can trust."
    },
    {
        title: 'GrapheneOS + S-TALKER',
        imageUrl: '/assets/images/os_system.png',
        subTitle: 'We provide an extra layer of security by working in integration with GrapheneOS, ensuring that your privacy remains at the highest level with specially configured security features for Android users.',
        description: 'Stalker offers a tailored security experience specifically for Android users. By integrating with GrapheneOS, we add an extra layer of protection to your device. GrapheneOS is an operating system optimized for privacy and security, and when combined with Stalker, it enhances the security of your communication even further. With specially configured security protocols, sensitive information on your device remains safe and protected from external interference. This integrated security layer allows you to feel secure against any potential data breaches. We deliver a communication experience that keeps your privacy and security at the highest level, exclusively for Android users.'
    },
];

export default Home;
