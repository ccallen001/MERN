import { Outlet } from 'react-router-dom';
import { useEnv } from '@/hooks';

import Nav from '@/components/nav/Nav';
import Clicker from '@/components/clicker/Clicker';
import DogFacts from '@/components/dog-facts/DogFacts';

import '@/app/App.scss';

export default function App() {
  const TITLE = useEnv('TITLE');

  return (
    <div className="App">
      <h1>{TITLE}</h1>
      <Nav />
      <Clicker />
      <Outlet />
      <DogFacts />
    </div>
  );
}
