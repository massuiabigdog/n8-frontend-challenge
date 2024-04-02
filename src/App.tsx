import './App.css';
import MainNavigator from './MainNavigator';
import { FavProvider } from './context/FavContext';

function App() {
  return (
    <FavProvider>
      <MainNavigator />
    </FavProvider>
  );
}

export default App;
