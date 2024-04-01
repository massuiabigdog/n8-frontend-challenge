import React from 'react';

interface FeaturesProps {
    items: {
        label: string;
        value: number;
    }[];
}

const Features: React.FC<FeaturesProps> = ({ items }) => {
    return (
        <div className="px-5 py-4 border-2 bg-gray-100 rounded-lg my-10 mx-auto">
            <div className="flex flex-wrap -m-4 text-center">
                {items.map((item, index) => (
                    <div key={index} className="p-4 md:w-1/3 lg:w-1/5 w-1/2 sm:w-1/3">
                        <h2 className="title-font font-medium sm:text-3xl text-3xl text-gray-900">{item.value}</h2>
                        <p className="leading-relaxed">{item.label.toUpperCase()}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Features;