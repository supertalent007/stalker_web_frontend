import React from 'react';
import '../index.css';
import FaqSection from '../components/Faq';
import SubSection from '../components/SubSection';
import SubscriptionPlans from '../components/subscriptions/Subscription';

const About = () => {
    return (
        <div className="container mx-auto text-primary relative">
            <div className='relative'>
                <div className="grid md:grid-cols-2 relative z-30">
                    <div className="col-span-2 md:col-span-1 mt-[100px] order-2 md:order-1">
                        <p className="font-[russo] text-3xl md:text-5xl lg:text-[60px] leading-tight mb-1">
                            About Us
                        </p>
                        <button className="relative mt-10 px-5 py-3 rounded-xl bg-gray-100 text-black hover:bg-secondary text-sm md:text-base z-[21]">
                            Get Started
                        </button>
                        <img className="mt-[30px] md:mt-[120px] relative z-[21]" src="/assets/images/header_flow.png" alt="Header Flow" />
                    </div>

                    <div className="col-span-2 md:col-span-1 flex justify-center items-center relative mt-10 md:mt-0 overflow-hidden order-1 md:order-2">
                        <img className="z-30 w-[350px] md:w-[530px]" src="/assets/images/phone_about.png" alt="Phone About" />
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
        imageUrl: '/assets/images/branding.png',
        subTitle: "At Stalker, protecting digital privacy and keeping user data safe under all circumstances is our most fundamental principle. In today's digital world, it is a great responsibility to ensure respect for individuals' privacy and private information. That is why we aim to gain the trust of our users and make this trust sustainable.",
        description: "Stalker uses end- to - end encryption techniques that ensure your data is only accessible to you and the recipient.In this way, each message is protected and transmitted with a private key that only you can access.Thanks to end - to - end encryption, no one - not even us - can see the content of your messages, including Stalker's servers.Our encryption techniques are constantly being updated and improved, so we ensure communication meets the latest security standards."
    },
    {
        title: 'End To End Encrypted',
        imageUrl: '/assets/images/encryption.png',
        subTitle: "Encrypted Bulletproof Servers: Verilerinizin güvenliği, sunucularımızda en üst düzeyde sağlanmaktadır. Sunucularımız, tüm verileri şifrelenmiş bir şekilde saklar, böylece herhangi bir güvenlik ihlali yaşansa dahi bilgilerinize erişim sağlanamaz. Verileriniz yalnızca sizin tarafınızdan erişilebilir ve kontrol edilebilir. Stalker'ın şifrelenmiş sunucu altyapısı, dış tehditlere karşı sürekli güncellenmekte ve en yeni güvenlik standartlarına göre optimize edilmektedir.",
        description: "Private Keys (Özel Anahtarlar): Her Stalker kullanıcısına özel bir şifreleme anahtarı tahsis edilir. Bu özel anahtarlar, kullanıcıların yalnızca kendi cihazlarında erişebileceği bir yapıdadır ve hiçbir üçüncü taraf bu anahtarlara erişemez. Mesajlarınızın güvenliği, bu anahtarlarla koruma altına alınarak, mesajlarınızın içeriklerini sadece sizin görebilmenizi sağlar. Stalker, şifreleme anahtarlarınızı saklamaz ve bu nedenle mesaj içerikleriniz tamamen gizli kalır."
    },
    {
        title: 'GrapheneOS + S-TALKER',
        imageUrl: '/assets/images/os_system.png',
        subTitle: 'We provide an extra layer of security by working in integration with GrapheneOS, ensuring that your privacy remains at the highest level with specially configured security features for Android users.',
        description: 'Stalker offers a tailored security experience specifically for Android users. By integrating with GrapheneOS, we add an extra layer of protection to your device. GrapheneOS is an operating system optimized for privacy and security, and when combined with Stalker, it enhances the security of your communication even further. With specially configured security protocols, sensitive information on your device remains safe and protected from external interference. This integrated security layer allows you to feel secure against any potential data breaches. We deliver a communication experience that keeps your privacy and security at the highest level, exclusively for Android users.'
    },
];

export default About;
