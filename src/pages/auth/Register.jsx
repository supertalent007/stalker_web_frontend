import React, { useEffect, useState } from 'react';
import { getSubscriptionPlan } from '../../utils/Constants';
import SubscriptionPlanCard from '../../components/cards/SubscriptionPlanCard';

const Register = () => {
    const [subscription, setSubscription] = useState(null);
    const [subscriptions, setSubscriptions] = useState([]);
    const [plan, setPlan] = useState(1);
    const [step, setStep] = useState(1);
    const [appType, setAppType] = useState('android');

    useEffect(() => {
        const filters = [
            { membership: "standard", plan: plan },
            { membership: "gold", plan: plan },
            { membership: "platinum", plan: plan },
        ];

        setSubscriptions(getSubscriptionPlan(filters));
    }, [plan]);

    return (
        <>
            {
                step === 1 && <ChoosePlatform setStep={setStep} setAppType={setAppType} />
            }
            {
                step === 2 &&
                <ChoosePlan
                    setPlan={setPlan}
                    subscriptions={subscriptions}
                    appType={appType}
                    setStep={setStep}
                    setSubscription={setSubscription}
                />
            }
            {
                step === 3 &&
                <FinalRegistration subscription={subscription} appType={appType} />
            }
        </>
    );
};

const ChoosePlatform = ({ setStep, setAppType }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full text-primary gap-[40px]">
            <h1 className="font-[russo] text-[50px] text-primary text-center">Choose Your Platform</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-[30px]'>
                <button
                    className='w-[350px] h-[350px] bg-[#111] items-center justify-center flex rounded-[30px]'
                    onClick={e => { setStep(2); setAppType('android'); }}
                >
                    <img
                        className='translate-y-[-10%] brightness-100 hover:brightness-150 hover:scale-[130%] transition-transform duration-300'
                        src="/assets/buttons/android.png"
                        alt="android app"
                    />
                </button>
                <button
                    className='w-[350px] h-[350px] bg-[#111] items-center justify-center flex rounded-[30px]'
                    onClick={e => { setStep(2); setAppType('android'); }}
                >
                    <img
                        className='translate-y-[-20%] brightness-100 hover:brightness-150 hover:scale-[130%] transition-transform duration-300'
                        src="/assets/buttons/ios.png"
                        alt="ios app"
                    />
                </button>
            </div>
        </div>
    )
}

const ChoosePlan = ({ setPlan, subscriptions, appType, setStep, setSubscription }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full text-primary gap-[30px]">
            <h1 className="font-[russo] text-[50px] text-primary text-center">Choose Your Plan</h1>
            <div className='px-[40px] py-[15px] bg-[#111] rounded-[15px]'>
                {
                    appType === 'android' ?
                        <img src="/assets/buttons/android.png" alt="android app" /> :
                        <img src="/assets/buttons/ios.png" alt="ios app" />
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 mb-5 gap-5'>
                <button
                    className='py-5 px-[80px] rounded-[10px] font-[600] bg-[#222] hover:bg-primary hover:text-black transition-all duration-500'
                    onClick={e => setPlan(1)}
                >
                    Monthly
                </button>
                <button
                    className='py-5 px-[80px] rounded-[10px] font-[600] bg-[#222] hover:bg-primary hover:text-black transition-all duration-500'
                    onClick={e => setPlan(2)}
                >
                    6 Months
                </button>
                <button
                    className='py-5 px-[80px] rounded-[10px] font-[600] bg-[#222] hover:bg-primary hover:text-black transition-all duration-500'
                    onClick={e => setPlan(3)}
                >
                    Yearly
                </button>
            </div>
            <div className='grid md:grid-cols-3 gap-5 w-full'>
                {
                    subscriptions.map((subscriptionData, index) => {
                        return (
                            <SubscriptionPlanCard
                                subscriptionData={subscriptionData}
                                key={`subscription_${index}`}
                                buttonName='Subscribe'
                                setStep={setStep}
                                setSubscription={setSubscription}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}

const FinalRegistration = ({ subscription, appType }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full text-primary gap-[30px]">
            <h1 className="font-[russo] text-[50px] text-primary text-center">Choose Your Plan</h1>
            <div className='grid md:grid-cols-2 gap-5'>
                <SubscriptionPlanCard
                    subscriptionData={subscription}
                    buttonName='Subscribe'
                    appType={appType}
                />
                <RegisterForm />
            </div>
        </div>
    )
}

const RegisterForm = () => {
    return (
        <div className='flex flex-col p-[30px] col-span-1 bg-[#111] rounded-[20px] gap-10 md:w-[450px]'>
            <input
                type="text"
                placeholder="Username"
                className="border-b-2 bg-[#111] border-gray-500 focus:border-primary outline-none px-2 py-2 text-white w-full"
            />
            <input
                type="email"
                placeholder="E-mail"
                className="border-b-2 bg-[#111] border-gray-500 focus:border-primary outline-none px-2 py-2 text-white w-full"
            />
            <input
                type="password"
                placeholder="Password"
                className="border-b-2 bg-[#111] border-gray-500 focus:border-primary outline-none px-2 py-2 text-white w-full"
            />
            <input
                type="password"
                placeholder="Confirm Your Password"
                className="border-b-2 bg-[#111] border-gray-500 focus:border-primary outline-none px-2 py-2 text-white w-full"
            />
            <div className='flex flex-col gap-2'>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="privacyPolicy"
                        className="rounded-sm h-4 w-4 bg-[#111]
                    focus:ring-0 focus:ring-offset-0 checked:bg-black
                    border-gray-300 border-2 accent-white"
                    />
                    <label htmlFor="privacyPolicy" className="text-gray-600 cursor-pointer">
                        Privacy Policy
                    </label>
                </div>
                <div className="flex items-center space-x-2">
                    <input
                        type="checkbox"
                        id="termsOfUse"
                        className="rounded-sm h-4 w-4 bg-[#111]
                    focus:ring-0 focus:ring-offset-0 checked:bg-black
                    border-gray-300 border-2 accent-white"
                    />
                    <label htmlFor="termsOfUse" className="text-gray-600 cursor-pointer">
                        Terms Of Use
                    </label>
                </div>
            </div>

            <button className="px-4 py-2 bg-primary text-black font-[600] rounded hover:bg-black hover:text-primary transition-all duration-500">
                Register
            </button>
        </div>
    )
}

export default Register;
