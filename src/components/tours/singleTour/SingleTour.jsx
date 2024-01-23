import Button from '../../UI/btn/Button';
import css from './SingleTour.module.css';

export default function SingleTour() {
  return (
    <div className={css.wrap}>
      <img src={'img/newyork.jpg'} alt={'newyork'} />
      <div className={css.infoBlock}>
        <h3>New York</h3>
        <p className={css.date}>Fri 27 Nov 2016</p>
        <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
        <Button className={css.flexStart}>Buy tickets</Button>
      </div>
    </div>
  );
}
