import css from './SingleTour.module.css';

export default function SingleTour({ town, date, img }) {
  return (
    <div>
      <img src={date} alt={town} />
    </div>
  );
}
