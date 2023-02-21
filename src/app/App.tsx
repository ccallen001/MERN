import { Outlet } from 'react-router-dom';
import { useEnv } from '@/hooks';

import { Nav } from '@/components';
// import { Clicker } from '@/components';
import { DogFacts } from '@/components';

import './App.scss';

export default function App() {
  const TITLE = useEnv('TITLE');

  return (
    <div className="App">
      <h1>{TITLE}</h1>
      <Nav />
      {/* <Clicker /> */}
      <Outlet />
      <DogFacts />
    </div>
  );
}
