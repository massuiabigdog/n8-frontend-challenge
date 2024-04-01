import React from 'react';

import { useNavigate, useLocation } from 'react-router-dom';
import { Section } from '../components/Molecules';
import { formatDate, formatMoney } from '../utils';
import { ContactForm, Features } from '../components/Organisms';
import { CustomButton } from '../components/Atoms';

const DetailScreen = () => {

  const navigate = useNavigate();

  const { property } = useLocation().state as any;


  const handleBack = async () => {
    navigate('/');
  }

  const featureItems = [
    {
      label: 'bed',
      value: property?.Bedrooms
    },
    {
      label: 'bath',
      value: property?.Bathrooms
    },
    {
      label: 'parking',
      value: property?.Parking
    },
    {
      label: 'sqft',
      value: property?.Sqft
    },
    {
      label: 'year built',
      value: property?.YearBuilt
    }
  ];



  return (
    <>
      <nav>
        <p>
          Detail Screen
        </p>

        <div>
          <button onClick={() => handleBack()}>
            Logout
          </button>
        </div>
      </nav>


      <Section>
        <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 bg-white shadow-sm border-2 rounded-lg overflow-hidden sm:mr-10 flex items-end justify-start relative">
            <div className="w-full">
              <img className="lg:h-[500px] w-full m-auto mb-2 object-cover object-center" src={property?.PictureURL} alt="blog" />
              <div className='p-6'>

                <div className='lg:flex'>
                  <div>
                    <h1 className="title-font text-3xl font-medium text-gray-900 ">{property.Title}</h1>
                    <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-2">Location: <span className='text-black'> {property.Location} </span></h2>
                  </div>
                  <div className='ml-auto'>
                    <p className="title-font lg:text-right text-4xl font-medium text-indigo-700 ">{formatMoney(property['Sale Price'])}</p>
                    <h2 className="tracking-widest text-sm title-font font-medium text-gray-400 mb-2">Date Listed: <span className='text-black'> {formatDate(property.DateListed)} </span></h2>

                  </div>
                </div>
                <Features items={featureItems} />
                <p className="leading-relaxed text-gray-700 mb-3">{property.Description}</p>

              </div>
            </div>

          </div>
          <ContactForm />
        </div>
        <div className='w-full text-center'>
          <CustomButton title='Back' href='/' />
        </div>

      </Section>
    </>
  )
}

export default DetailScreen;