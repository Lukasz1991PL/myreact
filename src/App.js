import './index';
import Hero from './components/Hero/Hero';
import SearchForm from './components/SearchForm/SearchForm';
import List from './components/List/List';
import { Counter } from './components/Counter/Counter';
import Container from './components/Container/Container';

const App = () => {
  return (
    <div>
      <Container>
        <Hero />
        <SearchForm />
        <List />
        <Counter />
      </Container>
    </div>
  );
};

export default App;
