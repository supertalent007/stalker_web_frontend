import React, { useState, useEffect } from "react";
import SubscriptionPlanCard from "../cards/SubscriptionPlanCard";
import { getSubscriptionPlan } from "../../utils/Constants";

const StarterSubscriptionPlans = () => {
    const [subscriptions, setSubscriptions] = useState([]);

    useEffect(() => {
        const filters = [
            { membership: "standard" },
        ];

        setSubscriptions(getSubscriptionPlan(filters));
    }, []);

    return (
        <div className="flex flex-col items-center gap-[60px] mt-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-3 justify-between gap-4 w-full">
                {
                    subscriptions.map((subscription, index) => {
                        return (
                            <SubscriptionPlanCard subscriptionData={subscription} key={`subscription_${index}`} buttonName='Subscribe' />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default StarterSubscriptionPlans; 