import { Link, Outlet } from 'react-router-dom';
import useEnvVar from '@/hooks/use-env-var';

import '@/app/App.scss';

const TITLE = useEnvVar('TITLE');

export default function App() {
  return (
    <div className="App">
      <h1>{TITLE}</h1>
      <nav>
        <Link to="">Home</Link> |&nbsp;
        <Link to="route-0">Route 0</Link> |&nbsp;
        <Link to="route-1">Route 1</Link>
      </nav>
      <Outlet />
    </div>
  );
}
