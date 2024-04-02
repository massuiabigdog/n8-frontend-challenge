import { useContext } from 'react';

import { useNavigate, useLocation } from 'react-router-dom';
import { Section } from '../components/Molecules';
import { formatDate, formatMoney } from '../utils';
import { ContactForm, Features, Header } from '../components/Organisms';
import { CustomButton, FavButton } from '../components/Atoms';
import { FavContext } from '../context/FavContext';

const DetailScreen =  () => {
  const navigate = useNavigate();
  const { favItems, toggleFavItem } =  useContext(FavContext) || {};
  const { property } = useLocation().state as any;
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
      <Header navigate={navigate} />
      <Section>
        <div className="px-5 mx-auto md:flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/3 md:w-1/2 sm:w-1/1 bg-white shadow-sm border-2 rounded-lg overflow-hidden sm:mr-4 flex items-end justify-start relative">
            <div className="w-full">
              <img className="lg:h-[500px] w-full m-auto mb-2 object-cover object-center" src={property?.PictureURL} alt="" />
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
                <FavButton active={!favItems?.find((item: any) => item.Id === property.Id)}  onClick={() => toggleFavItem && toggleFavItem(property)} />
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
        <div className='w-full mt-5 text-center'>
          <CustomButton title='Back' href='/' />
        </div>
      </Section>
    </>
  )
}

export default DetailScreen;