import { Route, Routes, useLocation } from 'react-router-dom';
import MinecraftImagesUtility from './Pages/Utility/Minecraft/Images/MinecraftImagesUtility';
import MinecraftUtilityHomepage from './Pages/Utility/Minecraft/MinecraftUtility';
import UtilityHomepage from './Pages/Utility/Utility';
import HomePage from './Pages/Home/Home';
import './AppContainer.css';
import LinksPage from './Pages/Links/Links';
import { AnimatePresence } from 'framer-motion';
import CharactersPage from './Pages/Characters/Characters';

function App () {
  const location = useLocation();

  return (
    <div className='app-container'>
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path='/links' element={<LinksPage />} />
          <Route path='/characters' element={<CharactersPage />} />

          <Route path='/utility/minecraft/images' element={<MinecraftImagesUtility />} />

          <Route path='/utility/minecraft' element={<MinecraftUtilityHomepage />} />
          <Route path='/utility' element={<UtilityHomepage />} />

          <Route path='/*' element={<HomePage />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
