import useEnv from '@/hooks/use-env';
import '@/app/App.scss';

const TITLE = useEnv('TITLE');

export default function App() {
  return (
    <div className="App">
      <h1>{TITLE}</h1>
    </div>
  );
}
