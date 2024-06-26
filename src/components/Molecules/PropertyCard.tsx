
import React, { useContext } from 'react';
import { PropertyItem } from '../../types';
import { formatMoney } from '../../utils';
import { FavButton } from '../Atoms';
import { FavContext } from '../../context/FavContext';

interface PropertyCardProps {
  handleDetailView: (item: PropertyItem) => void;
  isFav?: boolean;
  property: PropertyItem;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, handleDetailView, isFav }) => {
  const { toggleFavItem } = useContext(FavContext) || {};
  return (
  <div className="p-4 md:w-1/3 lg:w-1/4 w-full">
      <div className="h-full border-2 hover:shadow-xl  border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <div className="p-6">
          <img className="lg:h-[150px] m-auto w:auto mb-6 object-cover object-center" src={property?.ThumbnailURL} alt="blog" />
          <h1 className="title-font text-lg font-medium text-gray-900 ">{property.Title}</h1>
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2">{property.Location}, {property.YearBuilt}</h2>
          <p className="title-font text-2xl font-medium text-indigo-700 ">{formatMoney(property['Sale Price'])}</p>
          <div className='pb-4'>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              beds {property.Bedrooms}
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              baths {property.Bathrooms}
            </span>
          </div>
          <hr className='border-1 w-full mb-4' />
          <div className="flex  items-center flex-wrap ">
            <a onClick={() => handleDetailView(property)} className="text-indigo-500 cursor-pointer inline-flex items-center md:mb-2 lg:mb-0">View details
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <FavButton active={isFav} onClick={() => toggleFavItem && toggleFavItem(property)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;