import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from '../services/api';
import { Section, PropertyCard } from '../components/Molecules';
import { Spinner } from '../components/Atoms';
import { PropertyItem } from '../types';

const Home = () => {
  const [properties, setProperties] = useState([]);
  const [filters, setFilters] = useState({} as any);
  const navigate = useNavigate();

  const handleDetailView = async (property?: PropertyItem) => {
    navigate('/detail', { state: { property } });
  }

  const getProperties = async () => {
    try {
      const data = await getData();
      setProperties(data);

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getProperties()
  }, [])

  const handleFilterChange = (filter: string, value: string) => {
    setFilters({ ...filters, [filter]: value });
  }

  interface Property {
    Bedrooms: number;
    Bathrooms: number;
    Parking: number;
    'Sale Price': number;
  }

  const getAvailableOptions = (item: keyof Property) => Array.from(new Set(properties?.map((property) => property[item]))).sort((a, b) => a - b);
  const availableOptions = {
    bedrooms: getAvailableOptions('Bedrooms'),
    bathrooms: getAvailableOptions('Bathrooms'),
    parking: getAvailableOptions('Parking'),
    // price: [
    //   '$0 - $100,000',
    //   '$100,000 - $200,000',
    //   '$200,000 - $300,000',
    //   '$300,000 - $400,000',
    //   '$400,000 - $500,000',
    //   '$500,000+',
    // ],
    // TODO: Refactor the price range to be dynamic based on the data

    price: getAvailableOptions('Sale Price'),
  };

  return (
    <>
      <nav>
        <p>Welcome Home</p>
      </nav>
      <div className="px-5 py-4 bg-gray-100">
        <div className="container mx-auto flex justify-between mb-4">
          <div>
            <label htmlFor="bedrooms">Bedrooms:</label>
            <select
              id="bedrooms"
              className="ml-2 p-2 border border-gray-300 rounded"
              onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
            >
              <option value="">Any</option>
              {availableOptions.bedrooms.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="bathrooms">Bathrooms:</label>
            <select
              id="bathrooms"
              className="ml-2 p-2 border border-gray-300 rounded"
              onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
            >
              <option value="">Any</option>
              {availableOptions.bathrooms.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="parking">Parking Spaces:</label>
            <select
              id="parking"
              className="ml-2 p-2 border border-gray-300 rounded"
              onChange={(e) => handleFilterChange('parking', e.target.value)}>
              <option value="">Any</option>
              {availableOptions.parking.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="price">Price Range:</label>
            <select
              id="price"
              className="ml-2 p-2 border border-gray-300 rounded"
              onChange={(e) => handleFilterChange('price', e.target.value)}
            >
              <option value="">Any</option>
              {availableOptions.price.map((option) => (
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
            {properties?.map((property: any) => (
              <PropertyCard key={property.id} handleDetailView={(e: PropertyItem) => handleDetailView(e)} property={{ ...property }} />
            ))}
          </div> : <Spinner />
        }

      </Section>
    </>
  );
}

export default Home;
