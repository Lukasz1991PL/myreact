import { Hero } from '../Hero/Hero';
import { List } from '../List/List';
import { SearchForm } from '../SearchForm/SearchForm';

export const Home = () => {
  return (
    <div>
      <Hero />
      <SearchForm />
      <List />
    </div>
  );
};
