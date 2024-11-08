import React, { useEffect, useState } from "react";
import SubscriptionPlanCard from "../cards/SubscriptionPlanCard";
import { getSubscriptionPlan } from "../../utils/Constants";


const SubscriptionPlans = () => {
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        const filters = [
            { membership: "standard", plan: 1 },
            { membership: "gold", plan: 1 },
            { membership: "platinum", plan: 1 }
        ];

        setSubscriptions(getSubscriptionPlan(filters));
    }, []);

    return (
        <div className="flex flex-col items-center gap-[60px] mt-[100px]">
            <h3 className="text-[30px] sm:text-[35px] md:text-[40px] font-[russo]">Subscription Plans</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-4 w-full">
                {
                    subscriptions.map((subscription, index) => {
                        return (
                            <SubscriptionPlanCard subscriptionData={subscription} key={`subscription_${index}`} buttonName="View Details" />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SubscriptionPlans; 