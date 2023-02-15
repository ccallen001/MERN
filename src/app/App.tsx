import { Outlet } from 'react-router-dom';
import useEnvVar from '@/hooks/use-env-var';

import Nav from '@/components/nav/Nav';
import Clicker from '@/components/clicker/Clicker';

import '@/app/App.scss';

const TITLE = useEnvVar('TITLE');

export default function App() {
  return (
    <div className="App">
      <h1>{TITLE}</h1>
      <Nav />
      <Clicker />
      <Outlet />
    </div>
  );
}
