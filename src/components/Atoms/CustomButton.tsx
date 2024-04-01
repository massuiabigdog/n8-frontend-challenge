import React from 'react';

interface CustomButtonProps {
    title: string;
    href: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, href }) => {
    return (
        <a href={href}>
            <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none m-auto hover:bg-indigo-600 rounded text-lg">
                {title}
            </button>
        </a>
    );
};

export default CustomButton;