import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from '../services/api';
import { Section, PropertyCard } from '../components/Molecules';
import { Spinner } from '../components/Atoms';
import { PropertyItem } from '../types';
import { Header } from '../components/Organisms';

interface Property {
  Bedrooms: number;
  Bathrooms: number;
  Parking: number;
}

const Home = () => {
  const [properties, setProperties] = useState([] as PropertyItem[]);
  const [filteredProperties, setFilteredProperties] = useState([] as any[] | null);
  const [filters, setFilters] = useState({
  } as any);
  const [priceFilter, setPriceFilter] = useState(
    {
      min: 0,
      max: 1000000
    }
  );
  const navigate = useNavigate();

  const handleDetailView = async (property?: PropertyItem) => {
    navigate('/detail', { state: { property } });
  }

  const getProperties = async () => {
    try {
      const data = await getData();
      setProperties(data);
      setFilteredProperties(data);

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProperties()
  }, [])

  const getFilteredProperties = () => {
    const priceInFilter = priceFilter.min !== 0 || priceFilter.max !== 1000000;
    const getPriceFilteredProperties = () => {
      const filteredDataByPrice: PropertyItem[] = [];
      for (let i = 0; i < properties.length; i++) {
        if (properties[i]['Sale Price'] >= priceFilter.min && properties[i]['Sale Price'] <= priceFilter.max) {
          filteredDataByPrice.push(properties[i]);
        }
      }
      return filteredDataByPrice;
    }
    const itemsToFilter = priceInFilter ? getPriceFilteredProperties() : properties;
    const filterKeys = Object.keys(filters).filter(key => filters[key]);
    if (filterKeys.length === 0) {
      setFilteredProperties(itemsToFilter);
      return;
    }

    const filteredData: PropertyItem[] = [];
    for (let i = 0; i < itemsToFilter.length; i++) {
      if (filterKeys.every(key => itemsToFilter[i][key as keyof PropertyItem] === filters[key])) {
        filteredData.push(itemsToFilter[i]);
      }
    }
    setFilteredProperties(filteredData);
  }

  useEffect(() => {
    getFilteredProperties()
  }, [filters, priceFilter])

  const handleFilterChange = (filter: string, value: any) => {
    console.log(value, 'value')
    if (filter === 'price') {
      if (!value) {
        setPriceFilter({ min: 0, max: 1000000 });
        return;
      }
      const priceRange = value.split(' - ');
      setPriceFilter({ min: parseInt(priceRange[0].replace('$', '').replace(',', '')), max: priceRange[1] === '$500,000+' ? 500000 : parseInt(priceRange[1].replace('$', '').replace(',', '')) });
      return;
    }
    setFilters({ ...filters, [filter]: value });
  }



  const getAvailableOptions = (item: keyof Property) => Array.from(new Set(properties?.map((property) => property[item]))).sort((a, b) => a - b);
  const availableOptions = {
    Bedrooms: getAvailableOptions('Bedrooms'),
    Bathrooms: getAvailableOptions('Bathrooms'),
    Parking: getAvailableOptions('Parking'),
  };
  const priceOptions = [
    '$100,000 - $200,000',
    '$200,000 - $300,000',
    '$300,000 - $400,000',
    '$400,000 - $500,000',
    '$500,000 - $999,000',
  ]

  return (
    <>
      <Header navigate={navigate} />
      <div className="px-5 py-4 bg-gray-100">
        <div className="container mx-auto md:flex justify-between  mb-2 mt-2">
          {Object.keys(availableOptions).map((option) => <div className='flex md:block' key={option}>
            <label htmlFor={option}>{option}:</label>
            <select
              id={option}
              className="md:ml-2  p-2 border border-gray-300 rounded ml-auto mb-4 sm:ml-auto lg:mb-0"
              onChange={(e) => handleFilterChange(option, parseInt(e.target.value))}
            >
              <option value="">Any</option>
              {availableOptions[option as keyof typeof availableOptions].map((option: any) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>)}
          <div className='flex md:block'>
            <label htmlFor="price">Price Range:</label>
            <select
              id="price"
              className="md:ml-2 p-2 border border-gray-300 rounded ml-auto"
              onChange={(e) => handleFilterChange('price', e.target.value)}
            >
              <option value="">Any</option>
              {priceOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <Section>
        {
          properties.length ? <div className="flex flex-wrap -m-4">
            {filteredProperties?.map((property: any) => (
              <PropertyCard key={property.id} handleDetailView={(e: PropertyItem) => handleDetailView(e)} property={{ ...property }} />
            ))}
          </div> : <Spinner />
        }
        {
          properties.length && !filteredProperties?.length && <div className="text-center">No properties found</div>
        }

      </Section>
    </>
  );
}

export default Home;
