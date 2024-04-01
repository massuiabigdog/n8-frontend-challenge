
import React from 'react';
import { PropertyItem } from '../../types';
import { formatMoney } from '../../utils';



const PropertyCard: React.FC<PropertyItem> = (props: PropertyItem) => {
  return (
    <div className="p-4 md:w-1/4">
      <div className="h-full border-2 hover:shadow-xl  border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
        <div className="p-6">
          <img className="lg:h-[150px] m-auto w:auto mb-6 object-cover object-center" src={props.ThumbnailURL} alt="blog" />
          <h1 className="title-font text-lg font-medium text-gray-900 ">{props.Title}</h1>
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-2">{props.Location}, {props.YearBuilt}</h2>
          <p className="title-font text-2xl font-medium text-black ">{formatMoney(props['Sale Price'])}</p>
          <div className='pb-4'>
            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              beds {props.Bedrooms}
            </span>
            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
              baths {props.Bathrooms}
            </span>
          </div>
          <p className="leading-relaxed text-xs text-gray-500 mb-3">{props.Description.length > 200 ? props.Description.slice(0, 100) + '...' : props.Description}</p>
          <div className="flex  items-center flex-wrap ">
            <a className="text-indigo-500 cursor-pointer inline-flex items-center md:mb-2 lg:mb-0">See More
              <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;