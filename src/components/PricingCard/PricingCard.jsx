import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {

    const {name, price, description, features} = pricing
    
    return (
        <div>
            {/* card header  */}
            <div className='flex flex-col h-full border bg-amber-600 rounded-2xl p-4 '>
                <h1 className="text-5xl">{name}</h1>
                <h4>{price}</h4>

                {/* card body  */}
                <div className='bg-amber-400 p-4 rounded-2xl mt-10 text-blue-700 text-1xl flex-1'>
                    <p>{description}</p>
                    {
                        features.map((feature, index)=> <PricingFeature
                            key={index}
                            feature={feature}></PricingFeature>)
                    }
                </div>

                <button className="btn w-full mt-4">Subscribe</button>
                
            </div>
        </div>
    );
};

export default PricingCard;