
import React from 'react';

interface HeaderProps {
    navigate: any;
}
const Header: React.FC<HeaderProps> = ({ navigate }) => {
    const location = window.location.pathname;
    const navItems = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'Favorites',
            path: '/favorites'
        }
    ]
    return (
        <header className="text-indigo-100 bg-indigo-500 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a onClick={() => navigate('/')} className="cursor-pointer flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <span className="text-white text-xl">Real Estate App</span>
                </a>
                <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                    {navItems.map((item, index) => <a key={index} onClick={() => navigate(item.path)} className={`mr-5 cursor-pointer hover:text-indigo-200 ${location === item.path ? 'font-bold' : ''}`}>{item.name}</a>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;