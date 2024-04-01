import React from 'react';

import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    navigate('/');
  }

  return (
    <>
      <nav>
        <p>
         Detail Screen
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