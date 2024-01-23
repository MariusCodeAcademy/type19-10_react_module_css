import Button from '../../UI/btn/Button';
import css from './SingleTour.module.css';

export default function SingleTour({ item }) {
  function sayHi() {
    console.log('Hi ------');
  }

  return (
    <div className={css.wrap}>
      <img src={`/images/${item.img}`} alt={item.town} />
      <div className={css.infoBlock}>
        <h3 onClick={sayHi}>{item.town}</h3>
        <p className={css.date}>{item.date}</p>
        <p>Praesent tincidunt sed tellus ut rutrum sed vitae justo.</p>
        <Button onClick={sayHi} className={css.flexStart}>
          Buy tickets
        </Button>
      </div>
    </div>
  );
}
