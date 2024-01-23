import Button from '../../UI/btn/Button';
import css from './SingleTour.module.css';

export default function SingleTour() {
  function sayHi() {
    console.log('Hi ------');
  }

  return (
    <div className={css.wrap}>
      <img src={'img/newyork.jpg'} alt={'newyork'} />
      <div className={css.infoBlock}>
        <h3 onClick={sayHi}>New York</h3>
        <p className={css.date}>Fri 27 Nov 2016</p>
        <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
        <Button onClick={sayHi} className={css.flexStart}>
          Buy tickets
        </Button>
      </div>
    </div>
  );
}
