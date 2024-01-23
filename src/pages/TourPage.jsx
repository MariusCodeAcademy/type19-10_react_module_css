import { cards } from '../assets/tour';
import css from '../components/tours/TourPage.module.css';
import SingleTour from '../components/tours/singleTour/SingleTour';

export default function TourPage() {
  return (
    <section className={css.wrap}>
      <div className='container'>
        <h1 className={css.mainTitle}>Our Tours</h1>
        <p className={css.subtitle}>Remember to book your tickets!</p>

        <div className={css.grid}>
          {cards.map((cObj) => (
            <SingleTour key={cObj.town} />
          ))}
        </div>
      </div>
    </section>
  );
}
