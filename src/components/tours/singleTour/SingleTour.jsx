import css from './SingleTour.module.css';

export default function SingleTour() {
  return (
    <div>
      <img src={'img/newyork.jpg'} alt={'newyork'} />
      <div className='info'>
        <h3>New York</h3>
        <p>Fri 27 Nov 2016</p>
        <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
      </div>
    </div>
  );
}
