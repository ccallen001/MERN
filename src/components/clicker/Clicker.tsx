import { useRecoilState } from 'recoil';
import clicks from '@/store/atoms/click-count';
import './Clicker.scss';

export default function Clicker() {
  const [clickCount, setClickCount] = useRecoilState(clicks);

  return (
    <div className="Clicker">
      <button onClick={() => setClickCount(clickCount - 1)}>-</button>
      Clicker
      <button onClick={() => setClickCount(clickCount + 1)}>+</button>
    </div>
  );
}
