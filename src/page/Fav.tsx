import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Section, PropertyCard } from '../components/Molecules';
import { PropertyItem } from '../types';
import { Header } from '../components/Organisms';
import { FavContext } from '../context/FavContext';

const Fav = () => {
  const { favItems } = useContext(FavContext) || {};
  const navigate = useNavigate();
  const handleDetailView = async (property?: PropertyItem) => {
    navigate('/detail', { state: { property } });
  }

  return (
    <>
      <Header navigate={navigate} />
      <Section>
        <div className="text-center"><p className="text-2xl font-bold mb-6">Favorites</p></div>

        {
          <div className="flex flex-wrap -m-4">
            {favItems?.map((property: any) => (
              <PropertyCard
                key={property.id} handleDetailView={(e: PropertyItem) => handleDetailView(e)} property={{ ...property }} />
            ))}
          </div>
        }
      </Section>
      {!favItems?.length && <p className="text-center">No favorite yet.</p>}
    </>
  );
}

export default Fav;
