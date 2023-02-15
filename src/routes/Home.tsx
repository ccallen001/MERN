import { useRecoilValue } from 'recoil';
import clickCount from '@/store/atoms/click-count';

export default function Home() {
  const count = useRecoilValue(clickCount);

  return (
    <>
      <div style={{ paddingBottom: 8 }}>Click Count: {count}</div>
      <h2>Home</h2>
    </>
  );
}
