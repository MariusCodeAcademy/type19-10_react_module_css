import css from '../components/tours/TourPage.module.css';

export default function TourPage() {
  return (
    <section className={css.wrap}>
      <div className='container'>
        <h1 className={css.mainTitle}>Our Tours</h1>
        <p className={css.subtitle}>Remember to book your tickets!</p>
      </div>
    </section>
  );
}
