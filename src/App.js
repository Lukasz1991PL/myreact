import './index';
import Hero from './components/Hero/Hero';
import SearchForm from './components/SearchForm/SearchForm';
import List from './components/List/list';

const App = () => {
  return (
    <div>
      <Hero />
      <SearchForm />
      <List />
    </div>
  );
};

export default App;
