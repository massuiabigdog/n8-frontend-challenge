import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getData } from '../services/api';

const Home = () => {
  const [properties, setProperties] = useState([]);
  const navigate = useNavigate();

  const handleLogout = async () => {
    navigate('/detail');
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
  }, [] )

  return (
    <>
      <nav>
        <p>
          Welcome Home
        </p>

        <div>
          <button onClick={() => handleLogout()}>
            Logout
          </button>
        </div>
      </nav>
    </>
  )
}

export default Home;