import { Link } from 'react-router-dom';

import './Nav.scss';

export default function Nav() {
  return (
    <nav className="Nav">
      <Link to="">Home</Link> |&nbsp;
      <Link to="route-0">Route 0</Link> |&nbsp;
      <Link to="route-1">Route 1</Link>
    </nav>
  );
}
