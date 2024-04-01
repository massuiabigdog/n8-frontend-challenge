import React from 'react';

interface CustomButtonProps {
    title: string;
    href?: string;
    onClick?: () => void;
    disabled?: boolean;
}

const CustomButton: React.FC<CustomButtonProps> = ({ title, href, onClick, disabled }) => {

    const commonStyle = 'text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none m-auto hover:bg-indigo-600 rounded text-lg'
    
    return (
        <a href={href}>
            <button onClick={() => onClick && !disabled && onClick()} className={`${commonStyle} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}>
                {title}
            </button>
        </a>
    );
};

export default CustomButton;