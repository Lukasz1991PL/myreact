import './index';

import { NavBar } from './components/NavBar/NavBar';
import { Container } from './components/Container/Container';
import { Home } from './components/Home/Home';
import { About } from './components/About/About';
import { Favourite } from './components/Favourite/Favourite';
import { Routes, Route } from 'react-router-dom';
import { NoFound } from './components/NoFound/NoFound';
const App = () => {
  return (
    <div>
      <main>
        <NavBar />
        <Container>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/favourites' element={<Favourite />} />
            <Route path='*' element={<NoFound />} />
          </Routes>
        </Container>
      </main>
    </div>
  );
};

export default App;
