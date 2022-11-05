import { LazyLoadImage } from 'react-lazy-load-image-component';

function Card({ src, name }) {
  return (
    <div className="card">
      {/* <LazyLoadImage effect="blur" src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${src}`} alt={name} /> */}

      <img loading='lazy' src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2${src}`} alt={name} />
    </div>
  );
}

export { Card };
