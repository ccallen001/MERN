import { useRecoilValue } from 'recoil';
import { clickCount } from '@/atoms';

export default function Route0() {
  const count = useRecoilValue(clickCount);

  return (
    <>
      <div style={{ paddingBottom: 8 }}>Click Count: {count}</div>
      <h2>Route 0</h2>
    </>
  );
}
