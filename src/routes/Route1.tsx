import { useRecoilValue } from 'recoil';
import clickCount from '@/store/atoms/click-count';

export default function Route1() {
  const count = useRecoilValue(clickCount);

  return (
    <>
      <div style={{ paddingBottom: 8 }}>Click Count: {count}</div>
      <h2>Route 1</h2>
    </>
  );
}
