import React, { useEffect, useState } from 'react';
import { getSubscriptionPlan } from '../../utils/Constants';
import SubscriptionPlanCard from '../../components/cards/SubscriptionPlanCard';

const Register = () => {
    const [subscription, setSubscription] = useState(null);
    const [subscriptions, setSubscriptions] = useState([]);
    const [plan, setPlan] = useState(1);

    useEffect(() => {
        const filters = [
            { membership: "standard", plan: plan },
            { membership: "gold", plan: plan },
            { membership: "platinum", plan: plan },
        ];

        setSubscriptions(getSubscriptionPlan(filters));
    }, [plan]);

    return (
        <div className="flex flex-col items-center justify-center w-full text-primary">
            <h1 className="font-[russo] text-[50px] text-primary text-center">Choose Your Plan</h1>
            <div className='grid grid-cols-3 mb-5 gap-5'>
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
            <div className='grid grid-cols-3 w-full'>
                {
                    subscriptions.map((subscriptionData, index) => {
                        return (
                            <SubscriptionPlanCard subscriptionData={subscriptionData} key={`subscription_${index}`} buttonName='Subscribe' />
                        )
                    })
                }
                {/* <RegisterForm /> */}
            </div>
        </div>
    );
};

const RegisterForm = () => {
    return (
        <div className='flex flex-col p-[30px] col-span-1 bg-[#111] rounded-[20px] gap-10'>
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

            <button className="px-4 py-2 bg-primary text-blck font-[600] rounded hover:bg-black hover:text-primary transition-all duration-500">
                Register
            </button>
        </div>
    )
}

export default Register;
