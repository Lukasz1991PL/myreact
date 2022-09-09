import './index';
import Hero from './components/hero/Hero';
import SearchForm from './components/searchForm/SearchForm';
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
