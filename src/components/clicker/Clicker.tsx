import { useRecoilState } from 'recoil';
import { clickCount } from '@/atoms';
import './Clicker.scss';

export default function Clicker() {
  const [clicks, setClicks] = useRecoilState(clickCount);

  return (
    <div className="Clicker">
      <button onClick={() => setClicks(clicks - 1)}>-</button>
      Clicker
      <button onClick={() => setClicks(clicks + 1)}>+</button>
    </div>
  );
}
