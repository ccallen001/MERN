import { useAxios } from '@/hooks';

import './DogFacts.scss';

export default function DogFacts() {
  const { loading: dogFactsLoading, data: dogFacts } = useAxios(
    'get',
    'https://dogapi.dog/api/facts'
  );

  return (
    <div className="DogFacts">
      {dogFactsLoading ? (
        <h5>Stay...</h5>
      ) : (
        <>
          <h4>Did you know?</h4>
          <h5>{dogFacts?.facts[0]}</h5>
        </>
      )}
    </div>
  );
}
