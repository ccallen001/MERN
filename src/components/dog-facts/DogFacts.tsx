import { useAxios } from '@/hooks';

import './DogFacts.scss';

export default function DogFacts() {
  const { isLoading, data } = useAxios('get', 'https://dogapi.dog/api/facts');

  return (
    <div className="DogFacts">
      {isLoading ? (
        <h3>Sit! Stay...</h3>
      ) : (
        <>
          <h4>Did you know?</h4>
          <h5>{data?.facts[0]}</h5>
        </>
      )}
    </div>
  );
}
