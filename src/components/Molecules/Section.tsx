import React, { ReactNode } from 'react';


interface Props {
    children: ReactNode;
};
const Section = ({ children } : Props) => {
    return (
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                {children}
            </div>
        </section>
    );
};



export default Section;
